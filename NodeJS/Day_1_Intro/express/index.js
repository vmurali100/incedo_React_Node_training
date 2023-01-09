const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function(req,res){
res.send("Hey there!")
})

const users = ["Teju", "Pooja", "Indu"]

app.get('/users', (req,res)=>{
res.json({userDetails:users})
})

app.post("/create", (req,res)=>{
users.push(req.body.newusr)
res.json({users}) //else : res.json({userDetails:users}) or res.json({users:users})
})

app.delete("/delete", (req,res)=>{
let delUsr = req.body.deleteusr;
res.json({userDetails: users.filter((usr) => usr !==delUsr)})
})

app.put("/update/:usr", (req,res)=>{
let userToUpdate = req.params.usr;
let newUser = req.body.updateuser;
users.forEach((myusr,i)=>{
    if(myusr==userToUpdate){
        users[i]=newUser
    }
} 
)
res.json({users:users})
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});