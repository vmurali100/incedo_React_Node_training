var express = require('express');
var router = express.Router();
var fs =require




router.get('/',(req, res) =>{
  res.send('Get products')
});

router.post('/create',async(req, res)=>{
 
  res.send('Hello')
  var getAllProducts = await getCurrentProducts();
 getAllProducts.push(req.body);
 
 var getUpdatedProducts = await writeLatestProducts( getAllProducts);
 console.log(getUpdatedProducts);
})

function getCurrentProducts(){
    return new Promise((resolve,reject)=>{

   
 fs.readFile('./db.json',(err,data)=>{
    var currentProducts =(JSON.parse(Buffer.from(data).toString()));
    resolve(currentProducts)
 })
})
}
function WritelatestProduct(latestProducts){
    return new Promise((resolve, reject)=>
    {
        fs.writeFile('./db.json',JSON.stringfy(latestProducts),async(err,data)=>{
            let latestProducts =  await getCurrentProducts();
            resolve(latestProducts);
            console.log('updated');
        })
    })
}
module.exports = router;