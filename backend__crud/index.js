var express = require('express');
var productRouter = require('./Routes/products.js');
var app = express();

app.use(express.json());
app.use('/products' ,  productRouter );

app.listen( 8000 , () => {

    console.log( 'Server up and running');
})