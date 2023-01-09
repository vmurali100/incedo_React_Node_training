const express = require('express')
const app =express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World from app1');
});

app.listen(port, (req,res)=> {
    console.log(`Server is running on port ${port}`);
});
