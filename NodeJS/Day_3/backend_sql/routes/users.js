var express = require("express");
var router = express.Router();
var fs = require("fs");
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'incedoemployeedb'
});

// open the MySQL connection
router.get("/dbconn", async(req,res) => {
   console.log("API running");
   res.send("API running");
   connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });
});

router.get("/dbconn/getusers", async(req,res) => {
  connection.query(
    'select * from tblemployees',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
     // console.log(fields); // fields contains extra meta data about results, if available
      res.send(results);
    });
});

router.post("/dbconn/adduser",async(req,res) => {
  var user = req.body;
  console.log(user);
  connection.query(
    `INSERT INTO  tblemployees(id, ename,job,salary) VALUES(${user.id},'${user.ename}','${user.job}',${user.salary});`,
    function(err, results, fields) {
      console.log(err); // results contains rows returned by server
      res.send(results);
    });
});

router.delete("/dbconn/deluser/:ename",async(req,res) => {
  var user = req.params.ename;
  
  //console.log(user);
  connection.query(
    `DELETE FROM tblemployees WHERE ename = "${user}"`,
    function(err, results, fields) {
      console.log(err); // results contains rows returned by server
      res.send(results);
    });
    
});

router.put("/dbconn/updateuser/:ename", async(req,res) =>{
  var user = req.params.ename;
  connection.query(
    `UPDATE tblemployees SET salary = 500000 WHERE ename = "${user}";`,
    function(err, results, fields) {
      console.log(err); // results contains rows returned by server
      res.send(results);
    });
})

module.exports = router;