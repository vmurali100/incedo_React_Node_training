var fs = require('fs');

var parse = require('csv-parser');



var csvData=[];

var students  = './data.csv'

fs.createReadStream(students)

    .pipe(parse({delimiter: ':'}))

    .on('data', function(csvrow) {

        console.log(csvrow);

        csvData.push(csvrow);        

    })

    .on('end',function() {

      csvData.sort((a, b) => a.Age - b.Age);

      const totalGrade = csvData.reduce((acc, student) => acc + parseInt(student.Grade), 0);

      const averageGrade = totalGrade / csvData.length;

      console.log(averageGrade);

      console.log(totalGrade);

      console.log(csvData);

    });