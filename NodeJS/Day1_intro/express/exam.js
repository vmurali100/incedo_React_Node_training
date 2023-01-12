const fs = require('fs');
const {parse} = require('csv-parse');
function TotalGrade(total,num)
{
    return total + parseInt(num.grade);
}
function CSV(){
var Students = [];
    fs.createReadStream('./students1.csv')
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (row) =>{
      for(let i=0;i<row.length;i=i+row.length/3)
      {
         let student = {};
         student[row[i]] = row[i+1];
         student[row[i+2]] = row[i+3];
         student[row[i+4]] = row[i+5];
         Students.push(student);
      }
    })
    .on("end", function () {
      Students.sort((a, b) => a.age - b.age);
      console.log("Average of Students grade is "+Students.reduce(TotalGrade,0)/Students.length);
      console.log("The Sorted Array is:")
      console.log(Students);
    })
    .on("error", function (error) {
           throw error;
    });
}

CSV();
