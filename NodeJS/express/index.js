const bodyParser = require("body-parser");
const express=require("express");
const app=express();
app.use(bodyParser.json());
let data=[{id:1,name:"Cheis"},{id:2,name:"Rohan"}];

app.get("/get",(req,res)=>
{
    res.json({data})
})
app.post("/post",(req,res)=>
{
       data.push(req.body);
       res.json({data});
})
app.delete("/delete/:id",(req,res)=>
{
     data=data.filter(d=>d.id!=req.params.id);
     res.send({data});
})
app.put("/put/:id",(req,res)=>
{
    data.forEach((d,i)=>
    {
        
        if(req.params.id==d.id)
        data[i]=req.body;
        console.log(d.id);
    })
     res.send({data});
})
app.listen(3090,()=>
{
    console.log("Server Up")
});