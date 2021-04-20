const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
var db = require('../db');
const router = express.Router()

router.use(morgan("tiny"))

router.post("/adminUpdate", (req, res) => {
  const fname = req.body.fname; 
  const lname = req.body.lname;
  const age = req.body.age;
  const pincode = req.body.pincode;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  console.log(JSON.stringify(req.body, null, 4));
  
  if(!username || !password)
  {
    res.status(400).send({'password':0});
    console.log("Incomplete form submission")
    return;
  }
  db.query(
    "SELECT fname, lname, age, pincode, email FROM customer WHERE username = ? AND password = ?", 
    [username, password],
    (err, result) => {
      if (err) {
        res.status(400).send({'password':0});
        console.log("Invalid data 2");
      } else {
        if(!result[0])
        {
          res.status(400).send({'password':0});
          console.log(result);
          console.log("Invalid data 32")
          return;
        }
        else
        {
          console.log("Correct data provided");
          res.status(200).send({'password':1});
          console.log(result)
          return;
        }
      }
    }
  );
});

router.post("/adminReset", (req, res) => {
        const fname = req.body.fname; 
        const lname = req.body.lname;
        const age = req.body.age;
        const pincode = req.body.pincode;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

    if(!fname || !lname || !age || !pincode || !email)
    {
      res.status(400).send({'reset':0});
      console.log("Incomplete data entered")
      return;
    }
    db.query(
      "UPDATE customer SET fname = ?, lname = ?, age = ?, pincode = ?, email = ? Where username = ? AND password = ?", 
      [fname, lname, age, pincode, email, username, password],
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
            console.log("Account updation successful");
            res.status(200).send({'reset':1});
            console.log(result)
            return;
          }
        }
      }
    );
  });

module.exports = router
