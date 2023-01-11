var express = require('express');
var router=express.Router();
var fs=require('fs');
router.get('/allEmployees', async (req,res)=>{
    var emps=await getAllEmployees();
    res.send({emps})
})
router.post('/addEmployee',async (req,res)=>{
    var emp=req.body;
    var allEmployees=await getAllEmployees();
    allEmployees.push(emp);
    var getEmps=await addEmployee(allEmployees);
    res.send({getEmps});
})

function getAllEmployees(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./data/employee_details.json",(err,data)=>{
            var buf=Buffer.from(data);
            var allEmps=JSON.parse(buf.toString());
            resolve(allEmps)
        })
    })
}
function addEmployee(data){
    return new Promise((resolve,reject)=>{
        fs.writeFile("./data/employee_details.json",JSON.stringify(data), async (err,data)=>{
            var getAllEmps= await getAllEmployees();
            resolve(getAllEmps);
        })
    })
}
module.exports=router;