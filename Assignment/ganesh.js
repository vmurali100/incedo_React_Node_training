var fs = require("fs");

var parse = require("csv-parser");

var data = [];

var students = "./data/File.csv";

fs.createReadStream(students)

  .pipe(parse({ delimiter: ":" }))

  .on("data", function (row) {
    console.log(row);

    data.push(row);
  })

  .on("end", function () {
    data.sort((a, b) => a.Age - b.Age);

    const totalgrade = data.reduce(
      (acc, student) => acc + parseInt(student.Grade),
      0
    );

    const avggrade = totalgrade / data.length;

    console.log(avggrade);

    console.log(totalgrade);

    console.log(data);
  });
