var express=require('express')
var fs= reauire('fs')
var router= express.Router();

router.post("/createProduct",(req,res)=>{
    var product=req.body;

    fs.readFile('./data/products.json',(err,data)=>{
        var products =JSON.parse(Buffer.from(data).toString());
        products.push(product)
        addProduct(products);
      //  let allProducts= await getLatestProducts();

    })
})

function addProduct(products){
    fs.writeFile("./data/products.json",JSON.stringify(products),()=>{
        console.log("Product added")
    })
}
function getLatestProducts(){
    return new Promise((resolve,reject)=>{
    fs.readFile('./data/products.json',(err,data)=>{
        var buf=Buffer.from(data);
        var allProducts=JSON.parse(buf.toString());
        resolve(allProducts);

    })
})
}