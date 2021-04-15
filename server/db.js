var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'pharmacy'
});

db.connect(err=>{
    if(err) 
        console.log("Error Occured")
    else
        console.log("Connected to database")
});

module.exports = db;