const express = require("express")
const app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");


var Form=require("./formhtml");




app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
	res.render("form");
});


app.get('/result',(req,res)=>{
	res.render('result');
});

app.post("/",function(req,res){
	var username=req.body.username;
	var email=req.body.email;
	var f={username: username,email:email};
	Form.create(f,function(err,newlyCreatedForm){
		if(err)
		{
			console.log(err);
		}else{
			res.redirect("/result");
		}
	});
});


app.listen(3000, function() {
	console.log('Server running on port 3000');
});
