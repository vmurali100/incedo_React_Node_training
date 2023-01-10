var express = require("express");
var router = express.Router();
var fs = require("fs");
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async (req, res) => {
  var user = req.body;
  //console.log("req body is",user)
  var users = await getLatestUsers();
  //console.log("latestusers", users)
  var checkUser = isUserExist(users, user);
  //console.log(checkUser)
  if (checkUser) {
    res.send("User Already Exist .. Please register with New Email ID !!");
  } else {
    users.push(req.body);
    var allUsers = await addUsers(users); //to add data into file
    res.status(200).json({ allUsers });
  }
});

router.post("/login", async (req, res) => {
  var user = req.body;
  var users = await getLatestUsers();
  var checkUser = isUserExist(users, user);
  var token = jwt.sign(user, 'some secrete word');
  //console.log("Token is : ",token)
 
  if (checkUser) {
    res.status(200).json({ msg: "login Success !!",token });
  } else {
    res.send("Login Failure  . Please try Again !! ");
  }
});


// fs.readFile("./data/users.json", (err, data) => {
//   var users = JSON.parse(Buffer.from(data).toString());
//   var checkUser = isUserExist(users, user);
//   console.log(checkUser);
//   if (checkUser) {
//     res.send("User Already Exist .. Please register with New Email ID !!");
//   } else {
// users.push(req.body);
// addUsers(users);
// res.send("User Added Successfully !!");

//   }
// });
// res.send("checking the Users !!");

function addUsers(users) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./data/users.json", JSON.stringify(users), async () => {
      //var latestUsers = await getLatestUsers();
      resolve(users);
    });
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