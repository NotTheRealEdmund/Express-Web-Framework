const express = require('express');  
const app = express();

app.use((req, res, next) => {        // "next" method must be invoked whenever you create your custom middleware
    console.log(req.url, req.method);
    next();         // let the server know that processing of this request is done
});

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(3000);