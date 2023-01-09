<<<<<<< HEAD
<<<<<<< HEAD
var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:"Welcome to Employees !!!"})
})
router.get('/allEmployees',(req,res)=>{
    res.send({allEmployees})
})

module.exports = router;

const allEmployees = [
    {
        "id": 112,
        "email": "NAbrahams@sed.gov",
        "username": "CPtacek"
    },
    {
        "id": 113,
        "email": "GMawyer@pretium.gov",
        "username": "MLazier"
    },
    {
        "id": 114,
        "email": "MTravis@ipsum.net",
        "username": "LClore"
    },
    {
        "id": 115,
        "email": "NRooprai@rutrum.gov",
        "username": "LBlankenship"
    },
    {
        "id": 116,
        "email": "DStudenka@sollicitudin.org",
        "username": "APopsikle"
    }
]
=======
=======
>>>>>>> 0a279386ddac8a6cf7c59a877aa9ad281e64522f
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

<<<<<<< HEAD
module.exports = router;
>>>>>>> e7e10d628cae7290683bb487fd664591b397d070
=======
router.post("/createEmployee", async (req, res) => {
  const employee = req.body;
  let currentEmployees = await getLatestEmployeesData();
  currentEmployees.push(employee);
  let allEmployees = await addEmployees(currentEmployees);
  res.json({ allEmployees });
});

//   currentEmployees.
//   fs.readFile("./data/employees_data.json", (err, data) => {
//     var buf = Buffer.from(data);
//     var allEmployeesData = JSON.parse(buf.toString());
//     allEmployeesData.push(employee);
//   fs.writeFile(
//     "./data/employees_data.json",
//     JSON.stringify(allEmployeesData),
//     async (err, data) => {
//       var allEmployees = await getLatestEmployeesData();
//       res.json({ allEmployees });
//     }
//   );
//   });

function getLatestEmployeesData() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/employees_data.json", (err, data) => {
      var buf = Buffer.from(data);
      var allEmployeesData = JSON.parse(buf.toString());
      resolve(allEmployeesData);
    });
  });
}
function addEmployees(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/employees_data.json",
      JSON.stringify(data),
      async (err, data) => {
        var allEmployees = await getLatestEmployeesData();
        resolve(allEmployees);
      }
    );
  });
}
module.exports = router;
>>>>>>> 0a279386ddac8a6cf7c59a877aa9ad281e64522f
