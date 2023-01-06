const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const users = ["naveen","venkat","shashank","nibu","goutham s"];

app.get("/",function(req,res){
    res.send("this is my first node project");
})

app.get("/users",(req,res)=>{
    res.json({users});
})

app.post("/create",(req,res)=>{
    users.push(req.body.user);
    res.json({users});
    //res.send("user added!!")
})

app.delete("/delete",(req,res)=>{
    res.json({users:users.filter((user)=>user!=req.body.user)});
})

app.put("/update/:user",(req,res)=>{
    let user = req.params.user;
    let updatedUser = req.body.user;
    users.forEach((usr,i)=>{
        if(usr==user){
            users[i]=updatedUser;
        }
    })
    res.json({users})
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});
