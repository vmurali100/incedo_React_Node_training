const { Router } = require("express");
const express=require("express");
const route=Router();
const fs=require("fs");
route.get("/",(req,res)=>
{
    fs.readFile("./public/index.json",(err,data)=>
    {
        const buf=Buffer.from(data);
        res.send({message:JSON.parse(buf.toString())});
    })
   
})
route.post("/create",(req,res)=>
{
    fs.readFile("./public/index.json",(err,data)=>
    {
        const buf=Buffer.from(data);
        let data1=JSON.parse(buf.toString())
        data1.push(req.body);
        console.log(data1)
        fs.writeFile("./public/index.js",JSON.stringify(data1),(err)=>console.log(err));
        res.send("Success");

    })
   
})
module.exports=route;