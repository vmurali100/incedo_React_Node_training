var express = require('express');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var router = express.Router();


router.get("/", (req,res) => {
    res.send('Get products');
})


router.post('/create', verifyUser, async(req,res) => {
    // console.log(req.body)
    var getAllProducts = await getCurrentProducts();
    console.log(getAllProducts);
    getAllProducts.push(req.body);
    var getUpdatedProducts = await writeLatestProducts(getAllProducts)

    res.send('hello');
})

function getCurrentProducts() {
    return new Promise((resolve, reject) => {
        fs.readFile('./db.json', (err , data) => {
            var currentProducts = (JSON.parse(Buffer.from(data).toString()));
            resolve(currentProducts);
            console.log(currentProducts);
        })
    })
}

function writeLatestProducts(latestProducts) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./db.json', JSON.stringify(latestProducts), async (error, data) => {
            let latestProducts = await getCurrentProducts();
            resolve(latestProducts);
        })
    })
}

function verifyUser(req, res, next) {
    let token = req.headers.authorization;
    let tokenValue = token.split(' ')[1];
    console.log(tokenValue);

    try{
        const details = jwt.verify(tokenValue, 'secret_key') 
        console.log(details); 
        next();  
    }catch(err){
        res.send('Auth error');
    }
}

module.exports = router;