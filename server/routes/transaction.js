const express = require('express')
const mysql = require("mysql");
const db = require('../db');
const router = express.Router();


//generating a bill
router.post("/insert/genbill", (req, res) => {
  const C_ID = req.body.C_ID;

  if(!C_ID)
  {
    res.status(400).send("Improper data!");
    return
  }
  const sql_query_1="insert into transaction(C_ID) values (?)";
  db.query(
    sql_query_1,
    [C_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Encountered error.");
        return
      } 
      else {
        res.status(200).send("bill generated");
      }
    }
  );

});

//inserting meds into bill
router.post("/insert/addmed", (req, res) => {
  const sr_no = req.body.sr_no;
  const quantity = req.body.quantity;
  const C_ID = req.body.C_ID;
  var num;

  if(!C_ID || !sr_no || !quantity)
  {
    res.status(400).send("Improper data!");
    return
  }
  
  const sql_query_1="select * from transaction ORDER BY billno DESC LIMIT 1";
  const sql_query_2="insert into items values (?,?,?)";

  db.query(
    sql_query_1,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Encountered error.");
        return
      } 
      else{
        this.num=result[0].billno;
        console.log(num);
        console.log(result);

        db.query(
          sql_query_2,
          [sr_no, this.num, quantity],
          (err, result) => {
            if (err) {
              console.log(err);
              //if(err.errno == 1644) alert('OUT OF STOCK!');
              res.status(404).send("Encountered error");
            } 
            else {
              if(!result)
                res.status(404).send("Not Found");
              else{
                // db.query(
                //   "update transaction set totalcost=(select sum(subtotal) from ( select quantity*med_cost as subtotal from med,items where med.sr_no=items.sr_no and billno=? ) totalbill) where billno=?",
                //   [this.num,this.num],
                //   (err,result) => {
                //     if (err)
                //     res.status(400).send("Encountered error");
                //     else{
                //       res.status(200).send("Medicine added");
                //     }
                //   }
                // );
                db.query(
                  "CALL calc_total(?)",
                  this.num,
                  (err,result) => {
                    if (err){
                      
                    res.status(400).send("Encountered error");
                    }
                    else{
                      
                      res.status(200).send("Medicine added");
                    }
                  }
                );
              }            
            }
          }
        );
      }
    }
  );

});


//display all transacions from db
router.get("/lookup/all", (req, res) => {
  
  const sql_query="CALL transaction_print_all";

  db.query(
    sql_query,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Encountered error, contact admin.");
      } 
      else {
        res.send(result);
      }
    }
  );
});


//display transactions of a single customer ID from db
router.post("/seachBill", (req, res) => {
  const billno = req.body.billno;
  if(!billno)
  {
    res.status(400).send("Wrong bill ID");
    return;
  }
  
  const sql_query="select i.billno, totalcost, billdate, C_ID, i.sr_no, med_name, med_cost, quantity from transaction t,items i,med m where t.billno=i.billno and i.sr_no=m.sr_no and i.billno=?";
  db.query(
    sql_query,
    [billno],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Encountered error, contact admin.");
      } 
      else {
        console.log(result)
        if(result==undefined)
          res.status(400);
        else 
          res.send(result[0]);
      }
    }
  );
});


//delete transacions from db
router.post("/delete",(req,res) => {
  
  const billno = req.body.billno;
  if(!billno)
  {
    res.status(400).send("Wrong Bill number");
  }

  db.query(
    "DELETE FROM transaction where billno=?",
    [billno],
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

router.post("/insert/submit", (req, res) => {
  
  const sql_query="select i.billno,totalcost,billdate,C_ID,i.sr_no,med_name,med_cost,quantity from transaction t,items i,med m where t.billno=i.billno and i.sr_no=m.sr_no and i.billno=(select billno from transaction ORDER BY billno DESC LIMIT 1)";

  db.query(
    sql_query,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Encountered error.");
        return
      } 
      else{
        res.status(200).send(result);
      }
    }
  );

});

router.get("/today", (req, res) => {
  db.query("CALL transaction_print_today", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/date", (req, res) => {
  db.query("CALL transaction_sort_date", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/totalcost", (req, res) => {
  db.query("CALL transaction_sort_totalcost", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/todaytotal", (req, res) => {
  db.query("CALL transaction_print_tot_today", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;