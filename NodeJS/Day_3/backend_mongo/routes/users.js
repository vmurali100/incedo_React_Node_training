var express = require("express");
var router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");
//const uri ="mongodb+srv://dbUser1:Incedo12345@cluster0.3nptx2z.mongodb.net/?retryWrites=true&w=majority"
const uri ="mongodb://localhost:27017"

 const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//const collection = client.db("login_data").collection("users");
const collection = client.db("Database_Incedo").collection("Users");

router.get("/getUsers",async(req,res)=>
{
 const data=await collection.find().toArray();
 res.json(data)
})

router.get("/read",async(req,res)=>
{
 const data=await collection.find().toArray();
 res.json(data)
})

router.post("/create",async(req,res,next)=>
{
   collection.insertOne(req.body,(err,data)=>
   {
    if(err) 
    next(err);
    res.json(data);
   })
})

router.put("/update/:email",(req,res,next)=>
{
   collection.updateOne({email:req.params.email},{$set:req.body},(err,data)=>
   {
    if(err) next(err);
    res.json(data);
   })
})

router.delete("/delete/:email",(req,res,next)=>
{
   collection.deleteOne({email:req.params.email},(err,data)=>
   {
    if(err) next(err);
    res.json(data);
   })
})

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = {router,client};