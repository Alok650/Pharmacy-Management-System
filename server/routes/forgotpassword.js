const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
var db = require('../db');
const router = express.Router()

router.use(morgan("tiny"))

router.post("/forgotpassword", (req, res) => {
  const email = req.body.email;
  console.log(JSON.stringify(req.body, null, 4));
  const pincode = req.body.pincode;

  if(!email || !pincode)
  {
    res.status(400).send({'password':0});
    console.log("Incomplete form submission")
    return;
  }
  db.query(
    "SELECT password FROM customer WHERE email = ? AND pincode = ?", 
    [email, pincode],
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

router.post("/reset", (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    const pincode = req.body.pincode;

    if(!password)
    {
      res.status(400).send({'reset':0});
      console.log("No password entered")
      return;
    }
    db.query(
      "UPDATE customer SET password = ? Where email = ? AND pincode = ?", 
      [password, email, pincode],
      (err, result) => {
        if (err) {
          res.status(400).send({'reset':0});
          console.log("Invalid data 2");
        } else {
          if(result.length==0)
          {
            res.status(400).send({'reset':0});
            console.log(result);
            console.log("Invalid data 3")
            return;
          }
          else
          {
            console.log("password generation successful");
            res.status(200).send({'reset':1});
            console.log(result)
            return;
          }
        }
      }
    );
  });

module.exports = router
