var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/',(req,res)=>{

    res.json({message:"Welcome to Employees !!!"})
})
router.get('/allEmployees',(req,res)=>{
    // res.send({allEmployees})
    fs.readFile('./data/employees_data.json',(err,data)=>{
        var buf = Buffer.from(data);
        res.send({allEmployees:JSON.parse(buf.toString())})
    })
})

module.exports = router;