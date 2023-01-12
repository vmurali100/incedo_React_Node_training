var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const fs = require('fs');
const parse = require('csv-parse');

// Read and parse the CSV file
fs.readFile('students.csv', 'utf8', (err, data) => {
  if (err) throw err;
  
  parse(data, { columns: true }, (err, students) => {
    if (err) throw err;
    
    // Sort the array of students by age in ascending order
    students.sort((a, b) => a.age - b.age);

    // calculate the average grade
    let sum = 0;
    for (let student of students) {
      sum += student.grade;
    }
    const avg = sum / students.length;

    // Print the sorted array of students and the average grade to the console
    console.log(students);
    console.log(`Average grade: ${avg}`);
  });
});

module.exports = router;
