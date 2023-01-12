var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const csv = require('csv-parser');
const fs = require('fs');
const {parse} = require('csv-parse');

const filepath = "./student.csv"

fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csv())
    .on('data', (r) => {
        console.log("Student Data", r);
    })

    .on('end', () => {
        // handle end of CSV
    })

    var parsers = parse({columns: true}, function (err, r) {
      console.log(r);
      Array.prototype.sortBy = function(p) {
        return this.slice(0).sort(function(a,b) {
          return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
        });
      }

      var newObjAge = r.sortBy('Age');
      console.log(newObjAge)
      

    });
    
    fs.createReadStream('./student.csv').pipe(parsers);

    

   
  