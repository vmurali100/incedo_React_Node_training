
const express = require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json())
app.get('/',function(req,res){
    res.send("My First Node JS Project")
})
const users = ["Ganesh","Manju","Murali","Ram"]
app.get('/users',(req,res)=>{
    
    res.json({users:users})
})

app.post('/create',(req,res)=>{
    console.log(req.body)
    users.unshift(req.body.name);
    res.json({users:users});
})

app.delete('/delete',(req,res)=>{
let delUser = req.body.user;
res.json({"users": users.filter((usr) => usr !== delUser)});
})

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
app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000/")
})