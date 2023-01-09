const express = require('express');

const app = express();


app.get("/" , (req, res) => {

    res.send('Hello');
})

app.get("/users" , function(req,res){
    const users = ["uvan" , "surya"];
    res.json( { users:users});
    res.send('From users');
})

app.listen( 8000 , () => {
    console.log('Server running')
})