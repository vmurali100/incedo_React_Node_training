const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Hi Ganesh, Welcome to Team_Share_Radio");
});

const countries = ["India","Srilanka","Bangladesh","Pakistan","Mynmar","Afghanistan","China","Nepal","Bhutan","Maldives"]

app.get('/countries',(req,res)=>{
    res.json({countries});
});

app.post('/create',(req,res)=>{
    countries.unshift(req.body.country);
    res.json({countries});
})

app.delete('/delete',(req,res)=>{
let delcountry = req.body.country;
res.json({countries: countries.filter((cou) => cou !== delcountry)});
});

app.put('/update/:cou',(req,res)=>{
let countryToUpdate = req.params.cou;
let newCountry = req.body.country;
countries.forEach((myCountry,i)=>{
    if(myCountry == countryToUpdate){
        countries[i] = newCountry;
    }
});
res.json({countries});
});

app.listen(5000,()=>{
    console.log("Hi Ganesh, Server listening")
});