const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.get('/example', (req,res) => {     
    res.send('Hitting example route');
});

app.get('/example/:name/:age', (req,res) => {     
    res.send(req.params.name + " : " + req.params.age);
    console.log(req.query);
});

app.listen(3000);