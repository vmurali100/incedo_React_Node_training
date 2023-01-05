var express = require("express");
var router = express.Router();
var fs = require("fs");
const { resolve } = require("path");

router.get("/", (req, res) => {
  res.send({ message: "welcome" });
});
router.get("/allEmployees", (req, res) => {
  fs.readFile("./data/employee_data.json", (err, data) => {
    var buf = Buffer.from(data);
    res.send({ allEmployees: JSON.parse(buf.toString()) });
  });
});
router.post("/createEmployee", async (req, res) => {
  const employee = req.body;
  const employees = await getLatestEmployees();
  employees.push(employee);
  const employee_data = await addEmployess(employees);
  res.send({ employess: employee_data });
  //   fs.readFile("./data/employee_data.json", (err, data) => {
  //     var buf = Buffer.from(data);
  //     var allEmployees = JSON.parse(buf.toString());
  //     var newdata = req.body;
  //     allEmployees.push(newdata);
  //     fs.writeFile(
  //       "./data/employee_data.json",
  //       JSON.stringify(allEmployees),
  //       (err, data) => {}
  //     );
  //   });
  //   res.send({ msg: "posted successfully" });
});
function getLatestEmployees() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/employee_data.json", (err, data) => {
      var buf = Buffer.from(data);
      resolve(JSON.parse(buf.toString()));
    });
  });
}
function addEmployess(employees) {
  console.log(employees);
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/employee_data.json",
      JSON.stringify(employees),
      (err, data) => {}
    );
    resolve(employees);
  });
}
module.exports = router;
