var express = require("express");
var router = express.Router();
var fs = require("fs");
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get("/", async function (req, res, next) {
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  var users = await getLatestUsers();
  res.send(users);
});

router.post("/register", async (req, res) => {
  var user = req.body;
  var users = await getLatestUsers();
  var checkUser = isUserExist(users, user);
  if (checkUser) {
    res.send("User Already Exist .. Please register with New Email ID !!");
  } else {
    users.push(req.body);
    var allUsers = await addUsers(users);
    res.status(200).json({ allUsers });
  }
});

router.post("/login", async (req, res) => {
  var user = req.body;
  var users = await getLatestUsers();
  var checkUser = isUserExist(users, user);
  var token = jwt.sign(user, 'some secrete word');
 
  if (checkUser) {
    res.status(200).json({ msg: "login Success !!",token });
  } else {
    res.send("Login Failure  . Please try Again !! ");
  }
});

router.delete("/delete/:email",async (req,res)=>{
  var userEmail = req.params.email
  var users = await getLatestUsers();
  var deletedUsers = users.filter((usr)=> usr.email !== userEmail);
  var allUsers = await addUsers(deletedUsers);
  res.send(allUsers)
})

router.put('/update/:email',async(req,res)=>{
  var userEmail = req.params.email;
  var user = req.body
  var users = await getLatestUsers();
  console.log(user);
  users.forEach((usr,i)=>{
    if(usr['email']==userEmail){
      users[i]=user
    }
  })
  var allUsers = await addUsers(users);
  res.send(allUsers)

})

router.post('/createUser',async (req,res)=>{
  var user = req.body
  var users = await getLatestUsers();
  users.push(user);
  var allUsers = await addUsers(users);
  res.send(allUsers)
})

router.post("/create",async(req,res)=>{
  console.log("inside func")
  let user = req.body
  var sql = `INSERT INTO users (fname,lname,email,password,phone,subject,existingCustomer) 
  VALUES ("${user.fname}","${user.lname}","${user.email}",${user.password},${user.phone},"${user.subject}",${user.existingCustomer})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})
router.put("/update",async(req,res)=>{
  let newname = req.body.fname;
  let user= req.query.name;
  var sql = `UPDATE users SET fname="${newname}" where fname="${user}"`
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Updated");
  });
})
router.delete("/delete",async(req,res)=>{
  let name = req.query.name
  var sql = `DELETE from users where fname="${name}"`
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("deleted");
  });
})
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
      var latestUsers = await getLatestUsers();
      resolve(latestUsers);
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
