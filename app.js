const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.get('/example', (req,res) => {     
    res.send('Hitting example route');
});

app.listen(3000);