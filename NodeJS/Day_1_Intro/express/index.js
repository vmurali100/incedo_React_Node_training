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
res.json({users:users})
})

app.post("/create", (req,res)=>{
users.push(req.body.user)
res.json({users})
})

app.delete("/delete", (req,res)=>{
let delUsr = req.body.user;
res.json({users: users.filter((usr) => usr !==delUsr)})
})

app.put("/update/:usr", (req,res)=>{
let userToUpdate = req.params.usr;
let newUser = req.body.user;
users.forEach((myusr,i)=>{
    if(myusr==userToUpdate){
        users[i]=newUser
    }
} 
)
res.json({users})
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});