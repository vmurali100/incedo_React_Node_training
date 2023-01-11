
var express = require("express");
var bodyParser = require("body-parser");
var employees = require("./empModule").employees;
var server=express();
server.use(bodyParser.json());

server.get('/',function(req,resp){
    resp.send(employees);
});

server.get('/:id',function(req,resp){
    var id=req.params.id;
    var e=employees.find(x=>x.id==id);
    resp.send(e);
});

server.post('/',function(req,resp){
    var obj =req.body;
    employees.push(obj);
    resp.send("Row added successfully....");
});
server.put('/:id',function(req,resp){
    var id=Number(req.params.id);
    var index=employees.findIndex(x=>x.id==id);
    var e=req.body;
    employees[index]=e;
    resp.send("row edited successfully......");
});
server.delete('/delete/:id',function(req,resp){
    var id=Number(req.params.id);
    var index=employees.findIndex(x=>x.id==id);
    employees.splice(index,1);
    resp.send("row deleted successfully......");
});

server.listen(3000,()=>console.log("Server started listening"));