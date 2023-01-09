var express = require('express')
var fs = require('fs');
const { router } = require('../app');
var route = express.Router();

router.post("/createProduct", (asyncreq,res)=>{
  var product = req.body;

  fs.readFileSync('./data/products.json',(err,data)=>{
    var products = JSON.parse(Buffer.from(data).toString());
    product.push(product)
    addProduct(products)
    let allProducts=await getLatestProducts();
  })
})

function addProduct(products){
    fs.writeFile("./data/products.json", JSON.stringify(products),()=>{
        console.log("Product added")
    })
}

function getLatestProducts(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./data/products.json', (err,data)=>{
        var buf = Buffer.from(data);
            var allProducts = JSON.parse(buf.from(data).toString());
        resolve(allProducts)
        })       
    
    })
}