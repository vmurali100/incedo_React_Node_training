var express = require("express");
var router = express.Router();
var fs = require("fs");
var mysql2 = require("mysql2");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://suchi:123@cluster0.cdxeiql.mongodb.net/?retryWrites=true&w=majority";

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
router.get("/allusers", (req, res) => {
  fs.readFile("./data/usersdata.json", (err, data) => {
    var buffer = Buffer.from(data);
    res.send(JSON.parse(buffer.toString()));
  });
});
router.post("/createUser", async (req, res) => {
  const user = req.body;
  const users = await getAllUsers();
  users.push(user);
  const newusers = await addUsers(users);
  res.send({ msg: "created user" });
});
router.delete("/delete/:email", async (req, res) => {
  const user = req.params.email;
  const users = await getAllUsers();
  const newusers = users.filter((u) => u.email != user);
  await addUsers(newusers);
  res.send({ msg: "deleted successfully" });
});
router.put("/update/:email", async (req, res) => {
  const user = req.params.email;
  const newuser = req.body;
  const users = await getAllUsers();
  users.forEach((u, i) => {
    if (u.email == user) {
      users[i] = newuser;
    }
  });
  await addUsers(users);
  res.send({ msg: "updated successfully" });
});
function getAllUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/usersdata.json", (err, data) => {
      var buffer = Buffer.from(data);
      resolve(JSON.parse(buffer.toString()));
    });
  });
}
function addUsers(users) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/usersdata.json",
      JSON.stringify(users),
      (err, data) => {}
    );
    resolve(users);
  });
}
module.exports = router;
router.get("/db/allUsers", (req, res) => {
  const sql = "select * from data1.users";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
router.post("/db/createUser", (req, res) => {
  const user = req.body;
  const sql = `insert into users(fname,lname,email) values('${user.fname}','${user.lname}','${user.email}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send({ msg: "created successfully" });
  });
});
router.delete("/db/delete/:email", (req, res) => {
  const user = req.params.email;
  const sql = `delete from users where email='${user}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send({ msg: "deleted successfully" });
  });
});
router.put("/db/update/:email", (req, res) => {
  const user = req.params.email;
  var sql = `UPDATE users SET fname='${req.body.fname}', lname='${req.body.lname}' WHERE email='${user}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send({msg:"updated successfully"})
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});