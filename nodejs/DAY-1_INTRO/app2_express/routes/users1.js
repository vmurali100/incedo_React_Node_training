var express = require("express");
var router = express.Router();
var fs = require("fs");
const { resolve } = require("path");
router.get("/allUsers", (req, res) => {
  fs.readFile("./data/users_data.json", (err, data) => {
    var buf = Buffer.from(data);
    res.send({ allUsers: JSON.parse(buf.toString()) });
  });
});
router.post("/register", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  const checkUser = isExistUser(users, user);
  if (checkUser) {
    res.send("User aleady exist !!. register with another email");
  } else {
    users.push(user);
    const user_data = await addUsers(users);
    res.send({ msg: "Created new user" });
  }
});
router.post("/login", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  const checkUser = isExistUser(users, user);
  if (checkUser) {
    res.send("login Successfull");
  } else {
    res.send("User does not exits... please  register ");
  }
});
router.delete("/deleteUser", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  const users1 = users.filter((u) => u.id != user.id);
  const user_data = await addUsers(users1);
  res.send({ msg: "Deleted successfully" });
});
router.put("/updateUser", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  users.forEach((u) => {
    if (u.id == user.id) {
      (u.fname = user.fname),
        (u.lname = user.lname),
        (u.company = user.company),
        (u.email = user.email),
        (u.areacode = user.areacode),
        (u.phone = user.phone),
        (u.subject = user.subject),
        (u.isExisting = user.isExisting);
    }
  });
  await addUsers(users);
  res.json({ msg: "updated User" });
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
  return new Promise((resolve, result) => {
    users.forEach((u) => {
      if (u.email == user.email) {
        resolve(true);
      } else resolve(false);
    });
  });
}
module.exports = router;
