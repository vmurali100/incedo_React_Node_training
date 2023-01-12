const express = require("express")
const router = express.Router();
var fs = require('fs');
router.get('/allEmployees',(req,res)=>{
    // res.send({allEmployees})
    fs.readFile('./data/employees.json',(err,data)=>{
        var buf = Buffer.from(data);
        console.log("buffer",buf)
        res.send({allEmployees:JSON.parse(buf.toString())})
    })
})
router.post('/createEmployee',(req,res)=>{
    // res.send({allEmployees})
    fs.readFile('./data/employees.json',(err,data)=>{
        var buf = Buffer.from(data);
        console.log("buffer",buf)
        var data =JSON.parse(buf.toString())
        data.push(req.body.employee)
        fs.writeFile('./data/employees.json',JSON.stringify(data),(err,vals)=>{
            console.log(vals)
        })
    })
})
router.get("/send",(req,res)=>{
    res.send("ok")
})
module.exports=router