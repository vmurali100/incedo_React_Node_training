const { Router } = require("express");
const {createClient}=require("redis")
const router=Router()
// const {client} =require("./users")
const redisclient = createClient();


redisclient.on('error', (err) => console.log('Redis Client Error', err));


router.get("/cacheUsers",async(req,res)=>
{
    await redisclient.connect();

await redisclient.set('key', 'value');
const value = await redisclient.get('key');
await redisclient.disconnect();
res.json({value})
    // await redisclient.connect();
    // redisclient.get("AllUsers",async(err,user)=>
    // {
    //     if(err)
    //     {
    //         const collection = client.db("login_data").collection("users");
    //         const data= await collection.find().toArray();
    //        await  redisclient.set("AllUsers",JSON.stringify(data))
           
    //         res.json({data})
    //     }else
    //     {
            
    //         res.json({user})
    //     }
          
    // })
    // await client.disconnect();
})
module.exports=router;