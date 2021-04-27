const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
const db = require('../db');
const router = express.Router()


//add new medicin in stock
router.post("/stock/insert", (req,response)=>{
    const med_name = req.body.med_name
    const qty_left = req.body.qty_left
    const med_cost = req.body.med_cost
    const exp_date = req.body.exp_date
    const med_mfg = req.body.med_mfg
    const rac_loc = req.body.rac_loc
    const mfg_date = req.body.mfg_date
    let sql = 'INSERT INTO med (med_name, qty_left, med_cost, exp_date, med_mfg, rac_loc, mfg_date) VALUES (?,?,?,?,?,?,?)' 
    
    db.query(sql, [med_name, qty_left,  med_cost,  exp_date, med_mfg, rac_loc, mfg_date],(err, result)=>{
        if(err){
            console.log(err)
        }
        else
        {
            response.send("log inserted")
        }
    })
})

router.put("/stock/update", (req, response)=>{
     const sr_no = req.body.sr_no;
    const med_name = req.body.med_name
    const qty_left = req.body.qty_left
    const med_cost = req.body.med_cost
    const exp_date = req.body.exp_date
    const med_mfg = req.body.med_mfg
    const rac_loc = req.body.rac_loc
    const mfg_date = req.body.mfg_date
   console.log(med_name)
   console.log(sr_no)
    if(!sr_no || !med_name)
    {
      return response.status(400).send("Sometdsdhing went wrong");
    }
    var check_sql = "SELECT EXISTS(SELECT * FROM med WHERE sr_no = ?)"
    const check = db.query(check_sql, [sr_no]);
    var sql = "UPDATE med SET med_name = ?, qty_left = ?, med_cost = ?, exp_date = ?, med_mfg = ?, rac_loc=?, mfg_date = ? WHERE sr_no = ?";
    // if(check){
    db.query(sql,
        [ med_name, qty_left, med_cost, exp_date, med_mfg, rac_loc, mfg_date, sr_no],  (err, result)=> {
        if (err) {
            console.log(err);
            res.status(400).send("Encountered error, contact admin.");
            return
        }
        else {
            if(!result.affectedRows){
              response.status(404).send("Not found!");
            }
            else
              response.send("Updated!");
           return
          }
      });
    // }
})




//delete medicine 
router.post("/stock/delete",(req,res) => {
    
    const sr_no = req.body.sr_no;
    if(!sr_no)
    {
      res.status(400).send("Wrong Serial number");
    }

    db.query(
      "DELETE FROM med where sr_no=?",
      [sr_no],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send("Encountered error, contact admin.");
        } 
        else {
          if(!result.affectedRows)
            res.send("Not found!");
          else
            res.send("Deleted!");
        }
      }
    );
  });


router.post("/stock/search", (req, res) => {
  
  const sr_no = req.body.sr_no;
  if(!sr_no)
  {
    console.log(sr_no)
    res.status(400).send("Wrong medicine ID");
    return;
  }
  
  const sql_query="SELECT * FROM med where sr_no=?";

  db.query(
    sql_query,
    [sr_no],
    (err, result) => {
      if (err) {
        res.status(400).send("Encountered error, contact admin.");
      } 
      else {
        console.log(result)
        console.log(res[0])
        if(result.length==0){
          console.log(result[0])
          console.log("cha muda")
         return;
        }
        else {
          console.log("hi")
          res.send(result);
          return;}
      }
    }
  );
});


router.get("/stock/expirySort", (req, res) => {
  db.query("SELECT * FROM med order by exp_date", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


router.get("/stock/qtySort", (req, res) => {
  db.query("SELECT * from qty_sort", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/stock/shelfLife", (req, res) => {
  db.query("SELECT sr_no, med_name, shelf_life_year(mfg_date, exp_date) as shelf_life_year, shelf_life_month(mfg_date, exp_date) as shelf_life_month from med", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



module.exports = router