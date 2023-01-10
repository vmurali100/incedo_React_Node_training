var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
 
router.post("/login" , (req , res) => {

    const userDetails = req.body;

    console.log( userDetails);

    var token = jwt.sign( userDetails , 'secret_key');

    console.log(token);

    res.send('logged in');
})

module.exports =router;