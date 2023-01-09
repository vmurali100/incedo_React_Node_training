var express = require('express');
var router = express.Router();
var fs=require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',(req,res)=>{
  var user=req.body;
  fs.readFile('./data/users.json',(err,data)=>{
    var users=JSON.parse(Buffer.from(data).toString());
    var checkUser =isUserExist(users,user);
    users.push(req.body);
    addUsers(users)
    console.log("File added...")
  });
  res.send("welcome to register route")
});

function addUsers(users){
  fs.writeFile('./data/users.json',JSON.stringify(users),()=>{
    console.log("File added...")
  });
}

function isUserExist(users,currentUser){
  return !!users.find((myUser)=>myUser.email=== currentUser.email)
}
module.exports = router;
