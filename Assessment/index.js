var fs = require('fs');
var parse = require('csv-parser');
var finalCSVData=[];
var students  = './students.csv'
fs.createReadStream(students)
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
       // console.log(csvrow);
        //do something with csvrow
        finalCSVData.push(csvrow);
    })
    .on('end',function() {
      //do something with finalCSVData
      finalCSVData.sort((a, b) => a.age - b.age);
      const totalGrade = finalCSVData.reduce((total, person) => total + parseInt(person.grade), 0);
      const averageGrade = totalGrade/(finalCSVData.length)
      console.log(finalCSVData);
      console.log(totalGrade)
      console.log(averageGrade)
    });