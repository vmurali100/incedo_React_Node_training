var express =require('express');
var app = express();

var productRouter = require('./routes/product.js');
app.use('/product',productRouter)
app.use(express.json())

app.listen(8000,()=>{

    console.log("server is listening on port 8000");

});