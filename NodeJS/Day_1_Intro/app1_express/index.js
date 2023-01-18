const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { flushSync } = require('react-dom');
const router = require('../app2_express/routes/employees');
const { useSyncExternalStore } = require('react');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.send('hey')
})

const users = [
    {
     "name":"Teju",
     "id":1
    },
    {
        "name":"Pooju",
        "id":2
    }
]

app.get('/users', (req,res)=>{
res.send({users})
})

app.post('/create', (req,res)=>{
users.push(req.body.usr);
res.json({users})
})

app.delete('/delete', (req,res)=>{
    let delusr = req.body.del;
    res.json({users: users.filter((itm)=> itm!==delusr)})
})

app.put('/update/:id', (req,res)=>{
    let updateusr = req.params.id
    let newusr = req.body.usr;
    users.forEach((usr,i)=>{
        if(usr['id']==updateusr){
          users[i]=newusr;
        }
    })
    res.json({users})
})

app.listen(3000, ()=>{
    console.log("port running!")
})


function checkuser (req,res,next){
    var tokendetails = req.headers.authorization;
    try{
    var verify = jwt.verify(tokendetails, 'secret');
    next()
    }catch(error){
        res.send("error")
    }
}