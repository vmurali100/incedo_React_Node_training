var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Welcome to products' });
});

router.post('/addProduct',checkUSer, (req,res)=> {
    res.send("Welcome to add products")
})

function checkUSer(req,res,next) {
    console.log(req.headers.authorization);
    const tokenDetails = req.headers.authorization.split(' ')[1]
    try {
        const verifyDetails = jwt.verify(tokenDetails,"some scret word")
        res.send({msg:"He can add product"})
    } catch (error) {
        res.send({msg:"User is not authorized"})
    }
    next()
    //res.send({msg:"User is not authorized"})
}

module.exports = router;
