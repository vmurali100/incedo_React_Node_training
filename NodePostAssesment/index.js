var fs = require('fs');
var parse = require('csv-parser');
var csvData=[];
var students  = './students.csv'
fs.createReadStream(students)
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
        csvData.push(csvrow);        
    })
    .on('end',function() {
      csvData.sort((a, b) => a.age - b.age);
      const totalGrade = csvData.reduce((acc, student) => acc + parseInt(student.grade), 0);
      const averageGrade = totalGrade / csvData.length;
      console.log(averageGrade);
      console.log(totalGrade);
      console.log(csvData);
    });