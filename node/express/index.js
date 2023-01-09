const { application } = require('express');
var express= require('express');
const app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.send("Hello there")
})

const users=["John","David","Patrick"]

app.get('/users',(req,res)=>{
    res.json({users:users})
})
app.post('/create',(req,res)=>{
    console.log(req.body);
    users.unshift(req.body.user)
    res.send("user posted")
})
app.delete('/delete',(req,res)=>{
    let delUser=req.body.user;
    res.json({users:users.filter((usr)=>usr!==delUser)});
})
app.put('/update/:usr',(req,res)=>{
    let usrToBeUpd=req.params.usr;
    let newUser=req.body.user;
    users.forEach((myUser,i)=>{
        if(myUser==usrToBeUpd){
            users[i]=newUser;
        }
    })
})

app.listen(3000,()=>{
    console.log("Server is running")
})