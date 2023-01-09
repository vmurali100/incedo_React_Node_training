const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(express.json())
app.use( bodyParser.urlencoded({ extended:true}));
app.use(express.json());
app.listen( 3000 , ()=> {

    console.log( 'Server up and running');


})



app.get("/" , (req, res)=> {

    res.send( 'Home Page');
});


const userForm =[ {

    firstName:"Hari" ,
    lastName: "B",
    company:"Incedo",
    email:"hariharan@gmail.com",
    phone:"1234-456",
    
} ]


app.get("/users" , ( req, res) => {

    res.json({userForm});
})


app.post("/createUser" , (req,res)=> {
 
    console.log(req.body);
    userForm.unshift(req.body.user);
    res.json({userForm});
})
