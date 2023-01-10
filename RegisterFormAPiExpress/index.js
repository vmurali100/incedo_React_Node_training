const express = require('express');
const routes = require('./Express/Routes/registerfromroutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/registerUsers',routes);

app.listen(3002,()=>{
    console.log("app is listening on port 3002 "+'http://localhost:3002/registerUsers');
})