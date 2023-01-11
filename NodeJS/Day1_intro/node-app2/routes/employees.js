var express=require("express");
var router=express.Router();
var fs=require("fs");

router.get('/',(req,res)=>{
  res.json({msg:"Welcome"});
})

router.get("/allEmployee",async (req,res)=>{
    var emp= await getLatestEmployeesData();
    res.send({emp})
});

router.post("/createEmployee",async(req,res)=>{
    const employee=req.body;
    let currentEmployees= await getLatestEmployeesData();
    currentEmployees.push(employee);
    let allEmployees=await addEmployees(currentEmployees);
    res.json({allEmployees})
});

function getLatestEmployeesData(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./data/employee_data.json",(err,data)=>{
            var buf=Buffer.from(data);
            var allEmployeesData=JSON.parse(buf.toString());
            resolve(allEmployeesData);
        });
    });
}

function addEmployees(data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(
            "./data/employee_data.json",
            JSON.stringify(data),
            async (err,data)=>{
                var allEmployees=await getLatestEmployeesData();
                resolve(allEmployees);
            }
        );
    });
}
module.exports=router;