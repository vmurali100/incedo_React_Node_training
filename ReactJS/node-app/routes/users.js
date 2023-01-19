var express = require('express');
var router = express.Router();
var mysql=require('mysql2');
var fs=require('fs');
/* GET users listing. */

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"admin",
  database:"mydb"
});

router.get('/db/createTable',(req,res)=>{
  con.query("CREATE TABLE Users2 (name VARCHAR(255),email VARCHAR(255),mobileno VARCHAR(255))",function(err,results,fields){
    console.log(err);
    res.send(results);
    console.log("Table created");
  });
});
router.get('/db/display',(req,res)=>{
  con.query("SELECT * FROM Users2",(err,results,fields)=>{
    console.log(err);
    res.send(results);
    console.log("Table displayed");
  })
})
router.delete('/db/delete/:email',(req,res)=>{
  var email=req.params.email;
  con.query(`DELETE FROM Users2 WHERE email='${email}'`,function(err,results,fields){
    console.log(err);
    res.send(results);
    console.log("Row deleted");
  });
});
router.put('/db/update/:email',(req,res)=>{
  var email=req.params.email;
  var user=req.body;
  console.log(user);
  con.query(`UPDATE Users2 SET name='${user.name}',email='${user.email}',mobileno='${user.mobileno}' WHERE email='${email}'`,function(err,results,fields){
    console.log(err);
    res.send(results);
    console.log("Row updated");
  });
});

router.post('/db/addUser',(req,res)=>{
  var user=req.body;
  con.query(`INSERT INTO Users2 VALUES('${user.name}','${user.email}','${user.mobileno}')`,function(err,results,fields){
    console.log(err);
    res.send(results);
    console.log("Row inserted");
  });
});


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/allUsers',async (req,res)=>{
  var users=await getAllUsers();
  res.send({users});
})

router.post('/addUser',async (req,res)=>{
  var user=req.body;
  var currentusers=await getAllUsers();
  var checkUser=isUserExists(currentusers,user);
  if(checkUser)
  {
    res.send("User already exists");
  }
  else{
    currentusers.push(user);
    var users=await addUsers(currentusers);
    res.send({users});
  }
})
router.delete('/delete/:email',async (req,res)=>{
  var users=await getAllUsers();
  var email=req.params.email;
  var index=users.findIndex(usr=>usr.email==email);
  users.splice(index,1);
  var upUsers=await addUsers(users);
  res.send({upUsers});
})
router.put('/update/:email',async (req,res)=>{
  var users=await getAllUsers();
  var email=req.params.email;
  var index=users.findIndex(usr=>usr.email==email);
  var updatedUser=req.body;
  users[index]=updatedUser;
  var UpdatedUsers=await addUsers(users);
  res.send({UpdatedUsers});
})
function getAllUsers(){
    return new Promise((resolve,reject)=>{
      fs.readFile("./data/employee.json",(err,data)=>{
        var users= JSON.parse(Buffer.from(data).toString());
        resolve(users);
      })
    })
}
function addUsers(users){
  return new Promise((resolve,reject)=>{
    fs.writeFile("./data/employee.json",JSON.stringify(users),async (err,data)=>{
      var users=await getAllUsers();
      resolve(users);
    })
  })
}
function isUserExists(users,currentuser){
  return !! users.find((myUser)=> myUser.email===currentuser.email);
}
module.exports = router;
