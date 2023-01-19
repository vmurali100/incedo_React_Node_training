const express = require('express')
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send("hello !!!!!!!")
})

const users = ["eloo","bala","pugazh"]

app.get('/users',function(req,res){
    
    res.json({users})
    
})
app.post('/create',(req,res)=>{
    // console.log(req.body)
    users.push(req.body.user)
    res.json({users})

    
})
app.delete('/delete',(req,res)=>{
    users.filter((usr)=>{
        usr!==req.body.user
    })
    res.json({users})
})
app.put('/update/:val',(req,res)=>{
    var value = req.params.val
    var newvalue = req.body.user
    users.forEach((usr,i)=>{
        if(usr==value){
            users[i]=newvalue

        }

    })
    res.json({users})

})

app.listen(3000)