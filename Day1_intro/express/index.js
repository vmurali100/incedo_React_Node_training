const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Hello world");
});
const users = ["Aamai", "Anil", "Shashu", "Gowsu", "Surya"];

app.get("/users", (req, res) => {
  res.json({ users });
});

app.post("/create", (req, res) => {
  users.unshift(req.body.user);
  res.json({ users });
});

app.delete("/delete", (req, res) => {
  let delUser = req.body.user;

  if (users.indexOf(delUser) >= 0) users.splice(users.indexOf(delUser), 1);
  else console.log("User not found");
  res.json(users);
});

app.put("/update/:usr", (req, res) => {
    let userToUpdate = req.params.usr;
    let newUser = req.body.user;
    users.forEach((myUser,i)=> {
        if(myUser == userToUpdate){
            users[i] = newUser;
        }  
    })
    res.json({users})
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
