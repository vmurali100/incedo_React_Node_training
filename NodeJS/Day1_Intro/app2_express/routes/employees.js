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
