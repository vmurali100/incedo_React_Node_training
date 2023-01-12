var express = require("express");
var router = express.Router();
var fs = require("fs");
var mysql = require("mysql2");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"capstoneStudent"
  });

router.get("/users", async (req,res)=>{
    connection.query("select * from capstoneStudent.datatable",(error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
          res.send(results);
    })
    
});

router.post("/create", async (req,res)=>{
    var user = req.body;
    connection.query(`insert into capstoneStudent.datatable values ('${user.fname}','${user.lname}','${user.username}','${user.email}')`,(error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
    });
    connection.query("select * from capstoneStudent.datatable",(error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
          res.send(results);
    })
    // var users = await readData();
    // users.push(user);
    // users = await writeData(users);
    // res.send(users);
});

router.put("/update/:email", async (req,res)=>{
    var email = req.params.email;
    var user = req.body;
    connection.query(`update capstoneStudent.datatable set fname='${user.fname}', lname = '${user.lname}', username='${user.username}' where email = '${email}'`, (error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
    });
    connection.query("select * from capstoneStudent.datatable",(error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
          res.send(results);
    })
    // var users = await readData();
    // users.forEach((usr,i) => {
    //     if(usr.email === email){
    //         users[i]=user;
    //     }
    // });
    // users = await writeData(users);
    // res.send(users);
});

router.delete("/delete/:email", async (req,res)=>{
    var email = req.params.email;
    connection.query(`delete from capstoneStudent.datatable where email = '${email}'`,(error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
    });
    connection.query("select * from capstoneStudent.datatable",(error,results,fields)=>{
        if (error) {
            return console.error(error.message);
          }
          res.send(results);
    });
    // var users = await readData();
    // users = users.filter((usr) => usr.email !== email);
    // users = await writeData(users);
    // res.send(users);
})

function readData(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./data/userData.json",(err,data)=>{
            var allUsers = JSON.parse(Buffer.from(data).toString());
            resolve(allUsers);
        })
    })
}

function writeData(users){
    return new Promise((resolve,reject)=>{
        fs.writeFile("./data/userData.json",JSON.stringify(users),async (err,data)=>{
            var newUsers = await readData();
            resolve(newUsers);
        })
    })
}

module.exports = router;