var express = require('express');
var app = express();
var productRouter = require('./Router/products.js')
var loginRouter = require('./Router/users.js')


app.use(express.json());
app.use('/products', productRouter);
app.use('/users', loginRouter);

app.listen(8000, () => {
    console.log('Server running on port 8000');
})