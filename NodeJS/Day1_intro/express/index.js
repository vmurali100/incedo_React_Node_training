const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hey... My First Node JS Project !!!!");
});
const users = ["Naveen", "Rupendra", "Amar", "Sameer", "Kiran", "Kumar"];

app.get("/users", (req, res) => {
  res.json({ users });
});

app.post("/create", (req, res) => {
  users.unshift(req.body.user);
  res.json({ users });
});

app.delete("/delete", (req, res) => {
  let delUser = req.body.user;
  res.json({ users: users.filter((usr) => usr !== delUser) });
});
app.put("/update/:usr", (req, res) => {
  let userToUpdate = req.params.usr;
  let newUser = req.body.user;
  users.forEach((myUser, i) => {
    if (myUser == userToUpdate) {
      users[i] = newUser;
    }
  });
  res.json({ users });
});
app.listen(3000, () => {
  console.log("Server is Running at http://localhost:3000/");
});

