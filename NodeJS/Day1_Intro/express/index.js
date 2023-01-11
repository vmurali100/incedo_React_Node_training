var express = require("express");
var bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded)
app.use(bodyparser.json());

const users = ["Sathya","Ram","Narayanan"];

app.get('/', function(req,res,){
    res.send("First project");
})

app.get('/users',(req,res)=>{
    res.json({users});
})

app.listen(5000,()=>{
    console.log("Server started...")
});