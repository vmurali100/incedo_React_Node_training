const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("Ok")
})
app.get("/users",(req,res)=>{
    let users=["sony","suchi"]
    res.send(users)
})
app.post("/create",(req,res)=>{
    console.log("body",req.body)
    res.send("user created")
})
const users=["sony","suchi"]
app.delete("/delUser",(req,res)=>{
    let deluser = req.body.user
    res.json({users:users.filter((user)=>user!==deluser)})
})
app.put("/changeUser/:usr",(req,res)=>{
    let updatedName = req.params.usr
    console.log("name",updatedName)
  let newUser = req.body.user;
  users.forEach((myUser, i) => {
    if (myUser == updatedName) {
      users[i] = newUser;
    }
  });
  res.json({ users });
})
app.listen(3001,()=>{
    console.log("listening at port 3001")
})
