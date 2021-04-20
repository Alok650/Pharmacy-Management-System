const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
var db = require('../db');
const router = express.Router()

router.use(morgan("tiny"))

router.post("/authenticate", (req, res) => {
  const username = req.body.username;
  console.log(JSON.stringify(req.body, null, 4));
  const password = req.body.password;

  if(!username || !password)
  {
    res.status(400).send({'login':0});
    console.log("Login failed 1")
    return;
  }
  
  db.query(
    "SELECT username, password FROM customer WHERE username = ? AND password = ?", 
    [username, password],
    (err, result) => {
      if (err) {
        res.status(400).send({'login':0});
        console.log("Login failed 2");
      } else {
        if(!result[0])
        {
          res.status(400).send({'login':0});
          console.log(result);
          console.log("Login failed 3")
          return;
        }
        else
        {
          console.log("Login successful");
          res.status(200).send({'login':1});
          console.log(result)
          return;
        }
      }
    }
  );
});

module.exports = router