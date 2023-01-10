var express = require('express');
var fs = require('fs');
var router = express.Router();
var jwt = require('jsonwebtoken');
router.get("/" , ( req, res) => {

    res.send('Get products');
})



router.post('/create' , verifyUser ,   async( req, res) => {

         var getAllProducts  =   await  getCurrentProducts();

        //  console.log(getAllProducts);

          getAllProducts.push( req.body);

          var getUpdatedProducts = await writeLatestProducts( getAllProducts);


            //  console.log(getUpdatedProducts);


    res.send('Hello')
})



function verifyUser( req , res , next)
{ 
 

    let token  = (req.headers.authorization);

    let tokenValue =  token.split(' ')[1];
    console.log(tokenValue);
          

    try {

        const details =jwt.verify( tokenValue , 'secret_key')
        console.log(details);
        next();
    }catch(err) 
    {
       res.send('Authorization error');
    }

   


}

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