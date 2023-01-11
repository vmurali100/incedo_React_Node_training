var express = require('express');
var fs = require('fs');
var router = express.Router();
var jwt = require('jsonwebtoken');
router.get("/" , async( req, res) => {

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
      var getAllProducts = await getCurrentProducts();


    res.send(getAllProducts);
})


router.post('/create' ,    async( req, res) => {


    
         var getAllProducts  =   await  getCurrentProducts();

        //  console.log(getAllProducts);

          getAllProducts.push( req.body);

          var getUpdatedProducts = await writeLatestProducts( getAllProducts);


            //  console.log(getUpdatedProducts);


    res.send(getUpdatedProducts);
})


router.put('/update/:email' , async( req , res) => {

    const userEmail = req.params.email;

    var user = req.body;
    console.log(user);
    const getAllProducts = await getCurrentProducts();

      getAllProducts.forEach( ( usr , i) => {

        if( usr.email === userEmail) 
        {
            getAllProducts[i] = user;
        }
      } )

      var allProducts = await  writeLatestProducts(getAllProducts);
      res.send(allProducts);


      
      res.send('Hello')
})


router.delete("/delete/:email",async (req,res)=>{
    var userEmail = req.params.email
    var users = await getCurrentProducts();
    var deletedUsers = users.filter((usr)=> usr.email !== userEmail);
    var allUsers = await writeLatestProducts(deletedUsers);
    res.send(allUsers);
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