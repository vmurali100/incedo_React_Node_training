var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", (req, res) => {
  var user = req.body;
  var users = await getLatestUsers 
  fs.readFile("./data/users.json", (err, data) => {
    var users = JSON.parse(Buffer.from(data).toString());
    var checkUser = isUserExist(users, user);
    if (checkUser) {
      res.send("User already exists.. Please enter another email address");
    } else {
      users.push(user);
      addUsers(users);
      res.send("User added successfully");
    }
  });
});

function addUsers(users) {
  fs.writeFile("./data/users.json", JSON.stringify(users), (req, res) => {
    console.log("User added successfully");
  });
}

function getLatestUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/users.json", (err, data) => {
      var users = JSON.parse(Buffer.from(data).toString());
      resolve(users);
    });
  });
}

function isUserExist(users, currentUser) {
  return !!users.find((myUser) => myUser.email === currentUser.email);
}

module.exports = router;
