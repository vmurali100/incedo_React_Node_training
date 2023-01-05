const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const users = [];
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("response send");
});
app.get("/users", (req, res) => {
  const users = ["suchi", "sony", "deepu"];
  res.send({ users: users });
});
app.post("/users/create", (req, res) => {
  users.push(req.body.user);
  res.send({ users });
});
app.delete("/users/delete", (req, res) => {
  const name = req.body.user;

  res.send({ users: users.filter((user) => user != name) });
});
app.put("/users/update", (req, res) => {
  const user = req.body.user;
  const newuser = req.body.newuser;
  users.forEach((s, i) => {
    if (s == user) {
      users[i] = newuser;
    }
  });
  res.send({ users });
});
app.listen(3000, () => {
  console.log("listening at port 3000");
});
