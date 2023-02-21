var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', async (req, res)=>{
    var userDetails = await getData();
    console.log("details are",userDetails);
    res.send(userDetails);
});

router.post('/create', async(req,res)=>{
    var users = await getData();
    var user = req.body;
    users.push(user);
    users = await writeData(users);
    res.send(users);
});

router.put('/update/:id', async(req,res)=>{
    var id = (req.params.id);
    var users = await getData();
    users.forEach((user,i) => {
        if(user.id === id){
            users[i] = req.body;
        }
    })
    users = await writeData(users);
    res.send(users);
});

router.delete('/delete/:id', async(req,res)=>{
    var id = (req.params.id);
    console.log(typeof id);
    var users = await getData();
    users = users.filter((user) => user.id !== id);
    console.log(users);
    users = await writeData(users);
    res.send(users);
})

function getData(){
    return new Promise((resolve, reject)=>{
        fs.readFile('./dataFile/data.json', async (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                fs.readFile('./dataFile/data.json',(err, data)=>{
                    var data = JSON.parse(Buffer.from(data).toString());
                    resolve(data);
                })
            }
        });
    });
}

function writeData(users){
    return new Promise((resolve,reject)=>{
        fs.writeFile("./dataFile/data.json",JSON.stringify(users),async (err,data)=>{
            if(err){
                reject(err);
            }
            else{
                var newUsers = await getData();
                resolve(newUsers);
            }
        })
    })
}

module.exports = router;