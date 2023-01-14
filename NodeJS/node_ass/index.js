var express = require('express');
var fs = require('fs');
var {parse} = require('csv-parse')
var app = express();

app.get("/read" , async( req , res) => {
     
      const data = await readDataFromCSV('./data.csv')
      console.log(data);
      res.send(data);
})


app.get("/sortByAge"  ,async( req ,res) => {

    const data = await readDataFromCSV('./data.csv');

    data.sort(compareAgeAndSort);

    console.log(data);
    res.send(data);
    
})

app.get("/calculateAvg" , async( req ,res) => {


    const data = await readDataFromCSV( './data.csv' )
    var length = data.length;
    console.log(length)

    const totalGrades = data.reduce((sum, student) => sum + parseInt(student.Grade), 0);
 

     var av =totalGrades/parseInt(length);
     console.log( `Average is ${av}`);
    res.send(`Average is ${av}`);
    

})


function compareAgeAndSort(  stud1 , stud2 ){


    if( stud1.Age<stud2.Age) return -1;
    if( stud1.Age>stud2.Age) return 1;
    else  return 0;
}


function readDataFromCSV(filePath )
{

    return new Promise( (resolve , reject) => {

        fs.readFile( filePath , ( err , data) => {

            if(err) 
            reject(new Error('No File found'));
            
            else
            {parse( data  , { columns:true} , ( err , rows) => {
 
                if( err ) 
                reject(new Error('Invalid Async'))
                else
                resolve( rows);
            })}
        })
    })
}

app.listen( 8002 , () => {

    console.log('Server up and running');
})