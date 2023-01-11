var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Employees !!!" });
});
router.get("/allEmployees", (req, res) => {
  fs.readFile("./data/employees_data.json", (err, data) => {
    var buf = Buffer.from(data);
    res.send({ allEmployees: JSON.parse(buf.toString()) });
  });
});

router.post("/createEmp",(req,res)=>{
    const newData = req.body;
    fs.readFile("./data/employees_data.json",(err,data) =>{
        var buf = Buffer.from(data);
        var allEmp = JSON.parse(buf.toString());
        allEmp.push(newData);
        
        fs.writeFile("./data/employees_data.json",JSON.stringify(allEmp),async (err,data) =>{
            var allData = await getAvailableData();
            res.json({allData});
        })
    })
})

function getAvailableData(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./data/employees_data.json',(err,data)=>{
            var buf = Buffer.from(data);
            var EmpList = JSON.parse(buf.toString());
            resolve(EmpList);
        })
    })
}

module.exports = router;