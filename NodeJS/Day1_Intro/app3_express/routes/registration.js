const express = require("express")
const router = express.Router();

let users=[{

}]
router.post("/",(req,res)=>{
    users.push(req.body.user)
    res.json({users:users})
})
router.get("/",(req,res)=>{
    res.json({"users are":users})
})

module.exports=router