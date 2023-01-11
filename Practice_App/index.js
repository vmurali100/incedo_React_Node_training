const express = require("express");
var bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const movies = ["Varisu","Bigil","Beast","Sarkar"];

app.get("/movies",(req,res)=>{
    res.json({movies});
});

app.listen(4000, ()=>{
    console.log("Server Started...");
});

