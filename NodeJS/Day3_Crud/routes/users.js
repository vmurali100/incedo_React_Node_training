var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root@123",
  database:"capstoneStudent"
});

// var users=[
//   {fname:"mani",lname:"venkat",email:"mani@mail.com"},
//   {fname:"naveen",lname:"segu",email:"naveen@mail.com"}
// ]
/* GET users listing. */
router.get('/', async (req, res) =>{
  var data = await readUsers();
  res.send(data);
  //res.json({users});
});

router.post("/create", async (req,res)=>{
  var user = req.body;
  var users1 = await readUsers();
  users1.push(user);
  users1 = await writeUsers(users1);
  res.send(users1);
});

router.put("/update/:email", async (req,res)=>{
  var email = req.params.email;
  var user = req.body;
  var users2 = await readUsers();
  users2 = users2.forEach((usr,i)=>{
    if(usr.email === email){
      users2[i] = usr;
    }
  })
  users2 = await writeUsers(users2);
  res.send(users2);
});

router.delete("/delete/:email", async (req,res)=>{
  var email = req.params.email;
  var users = await readUsers();
  users = users.filter((user)=> user.email !== email);
  res.send(users);
});

function readUsers(){
  return new Promise((resolve,rejevt)=>{
    fs.readFile("./data/data.json",(err,data)=>{
      var allUsers = JSON.parse(Buffer.from(data).toString());
      resolve(allUsers);
    })
  })
}

function writeUsers(Users){
  return new Promise((resolve,reject)=>{
    fs.writeFile("./data/data.json",JSON.stringify(Users),async (err,data)=>{
      var allusers = await readUsers();
      resolve(allusers);
    })
  })
}

router.get("/users",(req,res)=>{
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  }); 
  res.send("Get is working !!!");
   
})
module.exports = router;
