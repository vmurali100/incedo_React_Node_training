var express = require('express');
var router = express.Router();



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "root@123"
});

router.get("/data",(req,res)=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
})
