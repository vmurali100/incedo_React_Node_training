var express = require("express");
var router = express.Router();
var fs = require("fs");
/* GET users listing. */
router.get("/", (req, res) => {
  fs.readFile("./data/usersdata.json", (err, data) => {
    var buf = Buffer.from(data);
    res.send(JSON.parse(buf.toString()));
  });
});
router.post("/createuser", async (req, res) => {
  const user = req.body;
  const users = await getLatestUsers();
  users.push(user);
  const newusers = await addUser(users);
  res.send({ msg: "created successful" });
});
router.delete("/delete/:email", async (req, res) => {
  const email = req.params.email;
  const users = await getLatestUsers();
  const newusers = users.filter((u) => u.email != email);
  const user = await addUser(newusers);
  res.send({ msg: "deleted successfully" });
});
router.put("/update/:email", async (req, res) => {
  const email = req.params.email;
  const newuser = req.body;
  const users = await getLatestUsers();
  users.forEach((u, i) => {
    if (u.email == email) {
      users[i] = newuser;
    }
  });
  const user = await addUser(users);
  res.send({ msg: "updated successfully" });
});
function getLatestUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/usersdata.json", (err, data) => {
      var buf = Buffer.from(data);
      resolve(JSON.parse(buf.toString()));
    });
  });
}
function addUser(user) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/usersdata.json",
      JSON.stringify(user),
      (err, data) => {}
    );
    resolve(user);
  });
}
module.exports = router;
