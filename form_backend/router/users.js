var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res){

    res.send( ' Getting Users');
} )


router.post("/register" , (req, res) => {

    var user = req.body;
    console.log(req.body);
    

    fs.readFile('./data/users.json', ( err, data)=>{

        var users = JSON.parse( Buffer.from(data).toString());
        users.push(user);

        addUserInFile(users);
    })
    

    res.send('Register route')
})



function addUserInFile( users) 
{
    fs.writeFile("./data/users.json",  JSON.stringify(users) ,  () => {

        console.log('File added');
    })
}


module.exports = router;