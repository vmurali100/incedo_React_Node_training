var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resourcehbhb');
});
router.get('/allUsers', async function(req, res){
  var users = await getAllUsers();
  res.send(users);
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
    fs.readFile("./data/users.json", (err,data) => {
      var users = JSON.parse(Buffer.from(data).toString());
      resolve(users);
    });
  });
}

function addUsers(users){
  return new Promise((resolve,reject)=>{
    fs.writeFile("./data/users.json",JSON.stringify(users), async (err,data)=>{
      var users= await getAllUsers();
      resolve(users);
    })
  })
}
function isUserExists(users,currentuser){
  return !! users.find((myUser)=> myUser.email===currentuser.email);
}
module.exports = router;