var express = require("express");
var router = express.Router();
var fs = require("fs");
const { resolve } = require("path");
router.get("/allUsers", (req, res) => {
  fs.readFile("./data/users_data.json", (err, data) => {
    var buf = Buffer.from(data);
    res.send(JSON.parse(buf.toString()));
  });
});
router.post("/register", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  users.push(user);
  const user_data = await addUsers(users);
  res.send({ msg: "Created new user" });
});
router.post("/login", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  const checkUser = await isExistUser(users, user);
  if (checkUser) {
    res.send("login Successfull");
  } else {
    res.send("User does not exits... please  register ");
  }
});
router.delete("/deleteUser/:email", async (req, res) => {
  const user = req.params.email;
  console.log(user);
  const users = await getLatestUsers();
  const users1 = users.filter((u) => u.email != user);
  const user_data = await addUsers(users1);
  res.send({ msg: "Deleted successfully" });
});
router.put("/updateUser/:email", async (req, res) => {
  var userEmail = req.params.email;
  var user = req.body;
  var users = await getLatestUsers();
  console.log(user);
  users.forEach((usr, i) => {
    if (usr["email"] == userEmail) {
      users[i] = user;
    }
  });
  var allUsers = await addUsers(users);
  res.send(allUsers);
});

function getLatestUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/users_data.json", (err, data) => {
      var buf = Buffer.from(data);
      resolve(JSON.parse(buf.toString()));
    });
  });
}
function addUsers(users) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/users_data.json",
      JSON.stringify(users),
      (err, data) => {}
    );
    resolve(users);
  });
}
function isExistUser(users, user) {
  return new Promise((resolve, reject) => {
    users.forEach((u) => {
      resolve(u.email === user.email);
    });
  });
}
module.exports = router;
