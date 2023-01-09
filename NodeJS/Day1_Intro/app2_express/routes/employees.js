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

module.exports = router;
>>>>>>> e7e10d628cae7290683bb487fd664591b397d070
