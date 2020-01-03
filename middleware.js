const express = require('express');  
const app = express();

app.use((req, res, next) => {  
    req.banana = 'banana';      // Take the user's request and add a property of banana and assign it a value of 'banana'
    next();        
});

app.get('/', (req,res) => {
    console.log(req.banana);    
    res.send('Hello World!');
});

app.listen(3000);