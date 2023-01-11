var express=require('express');
var router=express.Router();
var fs=require('fs');
var jwt=require('jsonwebtoken');

router.get('/allProducts', async(req,res)=>{
    var allProducts=await getAllProducts();
    res.send({allProducts});
});

router.post('/addProduct',checkUser, async (req,res)=>{
    var product=req.body;
    var currentProducts=await getAllProducts();
    var checkProduct=isProductExists(currentProducts,product);
    if(checkProduct)
    {
        res.send("User already exists Add new user");
    }
    else{
    currentProducts.push(product);
    var allProducts=await addProduct(currentProducts);
    res.send({allProducts});
    }
})
function checkUser(req,res,next){
    console.log("request : ",req);
    console.log(req.headers.authorization);
    const tokenDetails = req.headers.authorization.split(" ")[1];
    try {
      const verifyDetails = jwt.verify(tokenDetails, "some secrete word");
      next();
    } catch (error) {
      res.send({ msg: "User is not Authorized", error });
    }
}
function getAllProducts(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./data/product.json',(err,data)=>{
            var buf=Buffer.from(data);
            var allProducts=JSON.parse(buf.toString());
            resolve(allProducts);
        })
    })
}
function addProduct(data){
    return new Promise((resolve,reject)=>{
        fs.writeFile('./data/product.json',JSON.stringify(data), async(err,data)=>{
            var allProducts=await getAllProducts();
            resolve(allProducts);
        })
    });
};

const isProductExists=(products,product)=>{
    return !!products.find((myProduct)=> myProduct.name === product.name);

}
module.exports=router;