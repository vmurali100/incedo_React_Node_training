const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = ["Naveen","Nibras","Gowtham","shashank","venkat"];
app.get('/',function(req,res)
{
    res.send("my first node server");
});

app.get('/users',(req,res)=>{
    res.json({users});
})

app.listen(3000,()=>{
    console.log("our app is listening");
});