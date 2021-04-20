const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
var db = require('../db');
const router = express.Router()

router.use(morgan("tiny"))

router.post("/adminsearch", (req, res) => {

  const username = req.body.username;
  console.log(req);
  if(!username)
  {
    res.status(400).send("Wrong ID");
    return;
  }
  const sql_query="SELECT * FROM customer where username=?";

  db.query(
    sql_query,
    [username],
    (err, result) => {
      console.log(result);
      if (err) {
        res.status(400).send("Encountered error.");
      } 
      else {
        if(result.length==0)
          res.status(300).send("Not Found");
        else 
          res.send(result);
      }
    }
  );
});

router.post("/admindelete", (req, res) => {
        const username = req.body.username;
    if(!username)
    {
      res.status(400).send({'reset':0});
      console.log("Incomplete data entered")
      return;
    }
    db.query(
      "DELETE FROM customer WHERE username = ?",
      [username],
      (err, result) => {
        if (err) {
          res.status(400).send({'reset':0});
          console.log("Invalid data 2");
        } else {
          if(!result[0])
          {
            res.status(400).send({'reset':0});
            console.log(result);
            console.log("Invalid data 3")
            return;
          }
          else
          {
            console.log("Account deletion successful");
            res.status(200).send({'reset':1});
            console.log(result)
            return;
          }
        }
      }
    );
  });

  router.get("/customerList", (req, res) => {
    db.query("CALL getCustomerList", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.get("/covidList", (req, res) => {
    db.query("CALL getCovidvaccine", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.get("/recentcustomerslist", (req, res) => {
    db.query("CALL getRecentcustomers", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.get("/customerCount", (req, res) => {
    db.query("CALL customerCount", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
module.exports = router
