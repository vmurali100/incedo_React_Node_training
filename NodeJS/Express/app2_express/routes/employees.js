const express = require("express")
const fs = require("fs")
const router = express.Router();
const names=[
    {
        "name":"rups",
        "age":"21"
    },
    {
        "name":"sohan",
        "age":"21"
    }
]
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
    res.json({names:names})})

module.exports=router
