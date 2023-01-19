const {parse}= require('csv-parse');
const fs = require('fs');

function parseCsv(filePath) {
    const students = [];
    fs.createReadStream(filePath)
        .pipe(parse({delimiter: ',',from_line: 1 }))
        .on('data', (data) => {
            students.push({
                name: data[0],
                age: parseInt(data[1]),
                grade: parseInt(data[2])
            });
        })
        .on('end', () => {
            students.sort((a, b) => a.age - b.age);
            const totalGrade = students.reduce((total, person) => total + parseInt(person.grade), 0)/students.length;
            //const averageGrade = students.reduce((acc, curr) => acc + parseInt(curr.grade), 0) / students.length;
            console.log(`Sorted students: ${JSON.stringify(students)}\nAverage Grade: ${totalGrade}`);
        });
}

parseCsv('./students.csv');
