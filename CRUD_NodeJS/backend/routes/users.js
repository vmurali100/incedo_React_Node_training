var express = require("express");
var router = express.Router();
var fs = require("fs");
var jwt = require('jsonwebtoken')

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});


router.get("/register", async (req,res)=> {
  var user = req.body;
  var users = await getLatestUsers()
  fs.readFile("./data/users.json", (err,data)=> {
    var allUsers = JSON.parse(Buffer.from(data).toString())
    var checkuser = isUserExist(users,user)
    if(checkuser){
      return res.json({message:"User already exists"})
    } else {
      allUsers.push(user)
      addUsers(allUsers)
      res.send("User added succesfully")
    }
  })
})

router.get("/login",async (req,res) => {
  var user = req.body;
  var users = await getLatestUsers()
  var checkuser = isUserExist(users,user)
  var token = jwt.sign(user, "some scret word")
  if(checkuser){
    res.status(200).json({message:"Login successful", token})
  }
  else {
    res.send("Login failed")
  }
})

function addUsers(allUsers) {
  fs.writeFile("./data/users.json", JSON.stringify(allUsers), (err,data) => {
    console.log("User added succesfully")
  })
}

function isUserExist(users,user) {
  return !!users.find((myUser) => myUser.email === user.email);
}

function getLatestUsers() {
  return new Promise((resolve,reject) => {
    fs.readFile("./data/users.json", (err,data)=> {
      var allUsers = JSON.parse(Buffer.from(data).toString())
      resolve (allUsers)
    })
  })
}

module.exports = router;
