const express= require('express');
var bodyParser = require('body-parser')
const app =express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())
const users =["nishe","niva","suga","murali"]
app.get('/',function(req,res){
    res.send("hi")
})

app.get('/users',(req,res)=>{
    
    res.json({users})
})

app.post('/create',(req,res)=>{
    console.log("post")
    console.log(req.body)
  
    users.unshift(req.body.user)
    res.send("user posted")

})
app.post("/create", (req, res) => {
    users.unshift(req.body.user);
    res.json({ users });
  });
  
  app.delete("/delete", (req, res) => {
    let delUser = req.body.user;
    res.json({ users: users.filter((usr) => usr !== delUser) });
  });
  app.put("/update/:usr", (req, res) => {
    let userToUpdate = req.params.usr;
    let newUser = req.body.user;
    users.forEach((myUser, i) => {
      if (myUser == userToUpdate) {
        users[i] = newUser;
      }
    });
    res.json({ users });
  });
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})