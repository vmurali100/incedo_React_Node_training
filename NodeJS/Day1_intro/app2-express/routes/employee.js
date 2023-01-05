const express = require('express');
const router = express.Router();
const axios = require('axios');
var fs = require('fs');

router.get('/',(req,res)=>{
    res.send("working fine!!!");
});

router.get('/getAllEmployees',async (req,res)=>{
    const axiosdata = await axios.get("http://localhost:3000/developers").then((res)=>res.data);
    console.log(axiosdata);
    fs.writeFile("C:\\Users\\segu.naveen\\Documents\\incedo_React_Node_training\\NodeJS\\Day1_intro\\app2-express\\data\\developer_data.json",JSON.stringify(axiosdata),(err)=>{
        if(err)
        {
            console.log(err);
        }
    })
    fs.readFile("C:\\Users\\segu.naveen\\Documents\\incedo_React_Node_training\\NodeJS\\Day1_intro\\app2-express\\data\\developer_data.json",(err,data)=>{
         var buf = Buffer.from(data);
         res.send({alldevelopers:JSON.parse(buf.toString())});
    });
});

module.exports = router;