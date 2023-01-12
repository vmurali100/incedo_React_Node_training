const fs = require("fs");
const csv = require("csv-parser");
var results = [];
function readCSV(req, res) {
  fs.createReadStream("./data/File.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {});
  results.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log("sorted array of students", results);
  res.send(results);
}
exports.readCSV = readCSV;