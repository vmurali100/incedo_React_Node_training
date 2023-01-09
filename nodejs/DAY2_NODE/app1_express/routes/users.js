var express = require("express");
var router = express.Router();
var mysql2 = require("mysql2");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
var con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "data1",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = router;
