const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
var db = require('../db');
const router = express.Router()

router.use(morgan("tiny"))

router.post("/create", (req, res) => {
    const fname = req.body.fname; 
    const lname = req.body.lname;
    const age = req.body.age;
    const pincode = req.body.pincode;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
      "INSERT INTO customer (fname, lname, age,pincode,email, username, password) VALUES (?,?,?,?,?,?,?)",
      [fname, lname, age,pincode, email, username, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

module.exports = router