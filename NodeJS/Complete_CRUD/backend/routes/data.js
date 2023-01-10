var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/users", async (req,res)=>{
    var users = await readData();
    res.send(users);
});

router.post("/create", async (req,res)=>{
    var user = req.body;
    var users = await readData();
    users.push(user);
    users = await writeData(users);
    res.send(users);
});

router.put("/update/:email", async (req,res)=>{
    var email = req.params.email;
    var user = req.body;
    var users = await readData();
    users.forEach((usr,i) => {
        if(usr.email === email){
            users[i]=user;
        }
    });
    users = await writeData(users);
    res.send(users);
});

router.delete("/delete/:email", async (req,res)=>{
    var email = req.params.email;
    var users = await readData();
    users = users.filter((usr) => usr.email !== email);
    users = await writeData(users);
    res.send(users);
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