var express = require('express');
var productRouter = require('./Routes/products.js');
var loginRouter = require('./Routes/users.js');
var cors = require('cors');


var app = express();
app.use(cors());
app.use(express.json());
app.use('/products' ,  productRouter );
app.use('/users', loginRouter);

app.listen( 8001, () => {

    console.log( 'Server up and running');
})