var express = require('express');
var router = express.Router();
var mysql=require('mysql2');
var fs=require('fs');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "mydb"
});


router.get('/db/createDatabase', (req,res)=>{
   con.query("CREATE TABLE Users1 (fname VARCHAR(255),lname VARCHAR(255),email VARCHAR(255),password VARCHAR(255),phone VARCHAR(255),subject VARCHAR(255))",function(err,results,fields){
    console.log(err);
    res.send(results);
    console.log("Table created");
   });
});
router.get('/db/display', (req,res)=>{
  con.query("SELECT * FROM Users1",function(err,results,fields){
   console.log(err);
   res.send(results);
  });
});
router.post('/db/addUser',(req,res)=>{
  var user=req.body;
  con.query(`INSERT INTO Users1 VALUES('${user.fname}','${user.lname}','${user.email}','${user.password}','${user.phone}','${user.subject}')`,function(err,results,fields){
    console.log(err);
    res.send(results);
  });
});
router.put('/db/update/:email',(req,res)=>{
  var email=req.params.email;
  var user=req.body;
  con.query(`UPDATE Users1 SET fname='${user.fname}',lname='${user.lname}',email='${user.email}',password='${user.password}',phone='${user.phone}',subject='${user.subject}' WHERE email='${email}'`,function(err,results,fields){
    console.log(err);
    console.log(results);
    res.send(results);
  });
});
router.delete('/db/delete/:email',(req,res)=>{
  var email=req.params.email;
  con.query(`DELETE FROM Users1 WHERE email='${email}'`,function(err,results,fields){
    console.log(err);
    //const result=getdata();
    console.log(results);
    res.send(results);
  });
});

// const getdata=()=>{
//   return con.query("SELECT * FROM Users1",function(err,results,fields){
//     console.log(err);
//     return results;
//    });
// }


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/allUsers', async function(req, res){
  var users = await getAllUsers();
  res.send(users);
  console.log(users);
  console.log(typeof users);
})
router.post('/addUser',async (req,res)=>{
  var user=req.body;
  var currentusers= await getAllUsers();
  var checkUser=isUserExists(currentusers,user);
  if(checkUser)
  {
    res.send("User already exists Try with different email");
  }
  else
  {
    currentusers.push(user);
    var allUsers=await addUsers(currentusers);
    res.send(allUsers);
  }
})
router.put('/update/:email', async(req,res)=>{
    var users=await getAllUsers();
    var email=req.params.email;
    var index=users.findIndex(x=> x.email==email);
    var updatedUser=req.body;
    users[index]=updatedUser;
    var UpdatedUsers=await addUsers(users);
    res.send(UpdatedUsers);
})
router.delete('/delete/:email', async (req,res)=>{
  var users=await getAllUsers();
  var email=req.params.email;
  var index=users.findIndex(x=>x.email==email);
  users.splice(index,1);
  var afterDeleteUser=await addUsers(users);
  res.send(afterDeleteUser);

})
function getAllUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/user_data.json", (err,data) => {
      var users = JSON.parse(Buffer.from(data).toString());
      resolve(users);
    });
  });
}

function addUsers(users){
  return new Promise((resolve,reject)=>{
    fs.writeFile("./data/user_data.json",JSON.stringify(users), async (err,data)=>{
      var users= await getAllUsers();
      resolve(users);
    })
  })
}
function isUserExists(users,currentuser){
  return !! users.find((myUser)=> myUser.email===currentuser.email);
}
module.exports = router;
