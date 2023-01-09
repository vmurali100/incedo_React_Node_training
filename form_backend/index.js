var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./router/users')
var app = express();


app.use( bodyParser.urlencoded( { extended:true}));
app.use(express.json());
app.use(bodyParser.json());


app.use("/users" , userRouter)
app.listen(3000 , ( req, res)=> {
    console.log('listening');
})