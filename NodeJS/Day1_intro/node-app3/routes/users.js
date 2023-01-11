var express = require('express');
var router = express.Router();
var fs=require('fs');
var jwt=require('jsonwebtoken');

/* GET users listing. */

router.get('/allUsers', async (req,res)=>{
  var allUsers= await getAllusers();
  res.send({allUsers});
})

router.post('/addUser', async (req,res)=>{
  var user=req.body;
  console.log(user);
  var currentUsers=await getAllusers();
  var checkUser=isUserExists(currentUsers,user);
  if(checkUser){
    res.send("User already exists");
  }
  else{
  currentUsers.push(user);
  var UpdatedUsers=await addUsers(currentUsers);
  res.status(200).json({UpdatedUsers});
  }
});
router.post("/login",async (req,res)=>{
  var user=req.body;
  var users=await getAllusers();
  var checkUser=isUserExists(users,user);
  var token=jwt.sign(user,'1234');
  if(checkUser)
  {
    res.status(200).json({msg:"login success !!",token});
  }
  else{
    res.send("Login failure Try again!!");
  }
});
function getAllusers()
{
   return new Promise((resolve,reject)=>{
    fs.readFile("./data/user_details.json",(err,data)=>{
      var buf=Buffer.from(data);
      var users=JSON.parse(buf.toString());
      resolve(users);
    })
   })
}
function addUsers(data){
  return new Promise((resolve,reject)=>{
    fs.writeFile('./data/user_details.json',JSON.stringify(data), async (err,data)=>{
      var users=await getAllusers();
      resolve(users);
    })
  })
}
function isUserExists(users,currentuser){
  return !!users.find((myuser)=> myuser.email === currentuser.email)
}
module.exports = router;
