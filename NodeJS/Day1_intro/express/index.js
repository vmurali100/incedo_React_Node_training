const express =require('express');

var bodyparser=require('body-parser');
const app= express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/',function(req,res){
    res.send("hello");
})
const users=["bhargav","sai"];

app.get('/users',(req,res)=>{
    res.json({users})
})
app.post('/create',(req,res)=>{
    users.push(req.body.user);
    res.send({users});
})

app.delete("/delete",(req,res)=>{
    let deluser=req.body.user;
    res.json({users: users.filter((usr)=> usr!== deluser)});
})
 
app.put("/update/:user",(req,res)=>{
     let userToupdate=req.params.user;
     let newUser=req.body.user;
     users.forEach((myUser,i)=>{
        if(myUser==userToupdate){
            users[i]=newUser
        }
     })
     res.json({users})
})
app.listen(3000);