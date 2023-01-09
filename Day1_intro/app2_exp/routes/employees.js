var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/", (req, res) => {
  res.send("Welcome to employees page");
});

router.get("/allEmployees", (req, res) => {
  fs.readFile("./data/employeesData.json", (err, data) => {
    var buf = Buffer.from(data);
    res.json({ allEmployees: JSON.parse(buf.toString()) });
  });
});

router.post("/create", (req, res) => {
  const employee = req.body;
  fs.readFile("./data/employeesData.json", (err, data) => {
    var buf = Buffer.from(data);
    var allEmployeesData = JSON.parse(buf.toString());
    allEmployeesData.push(employee);
    fs.writeFile(
      "./data/employeesData.json",
      JSON.stringify(allEmployeesData),
      async (err, data) => {
        var allLatestEmployees = await getLatestEmployees();
        res.json({ allLatestEmployees });
      }
    );
  });
});

function getLatestEmployees() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/employeesData.json", (err, data) => {
      var buf = Buffer.from(data);
      var allEmployeesData = JSON.parse(buf.toString());
      resolve(allEmployeesData);
    });
  });
}

module.exports = router;
