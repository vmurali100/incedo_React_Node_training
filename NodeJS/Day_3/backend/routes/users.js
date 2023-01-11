var express = require("express");
var router = express.Router();
var fs = require("fs");
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'incedoemployeedb'
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var users = await getLatestUsers();
  res.send(users);
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

router.get("/dbConnection", function(req,res,next){
  console.log("API running");
  res.send("msg")
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });
})

module.exports = router;