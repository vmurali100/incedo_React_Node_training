var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var fs = require("fs");
const e = require("express");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ title: "Welcme to Products !!" });
});

router.post("/addProduct", checkUser, async (req, res) => {
  var product = req.body;
  var allProducts = await getAllProducts();
  var check = checkProduct(allProducts, product);
  if(check){
    res.send({msg:"The Product is Already exist . Please add a New product "})
  }else{
    allProducts.push(product);
    var allLatestProducts = await addProduct(allProducts);
    res.send({ msg: "Product Added Successfully ", products: allLatestProducts });
  }
 
});
function checkUser(req, res, next) {
  console.log(req.headers.authorization);
  const tokenDetails = req.headers.authorization.split(" ")[1];
  try {
    const verifyDetails = jwt.verify(tokenDetails, "some secrete word");
    next();
  } catch (error) {
    res.send({ msg: "User is not Authorized", error });
  }
}

const getAllProducts = () =>
  new Promise((resolve, reject) => {
    fs.readFile("./data/products.json", (err, data) => {
      var productsDetails = JSON.parse(Buffer.from(data).toString());
      resolve(productsDetails);
    });
  });
const addProduct = (products) =>
  new Promise((resolve, reject) => {
    fs.writeFile("./data/products.json", JSON.stringify(products), async () => {
      var latestProducts = await getAllProducts();
      resolve(latestProducts);
    });
  });

const checkProduct = (products, product) => {
  return !!products.find((myProduct) => myProduct.productName === product.productName);
};
module.exports = router;