var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get("/" , ( req, res) => {

    res.send('Get products');
})



router.post('/create' , async( req, res) => {

         var getAllProducts  =   await  getCurrentProducts();

         console.log(getAllProducts);

          getAllProducts.push( req.body);

          var getUpdatedProducts = await writeLatestProducts( getAllProducts);


             console.log(getUpdatedProducts);


    res.send('Hello')
})


function getCurrentProducts(){

 
    return new Promise ( ( resolve,  reject) => {


        fs.readFile('./db.json' , ( err , data) => {
 
            var currentProducts =    (JSON.parse(Buffer.from(data).toString()));
            resolve(currentProducts);
        })

    } )
    
    
}


function writeLatestProducts( latestProducts) {

  
      return new Promise ( ( resolve , reject) => {

        fs.writeFile( './db.json' , JSON.stringify(latestProducts) , async( err , data) => {

                      let latestProducts =  await getCurrentProducts();
                      resolve(latestProducts);
        })
      })

}
module.exports = router;