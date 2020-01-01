const express = require('express');
const app = express();

// Default route
app.get('/', function(req, res) {
    res.send("Hello world!");
});

// Add '/example' route
app.get('/example', (req,res) => {     
    res.send('Hitting example route');
});

// Add route parameters
app.get('/example/:name/:age', (req,res) => {     
    res.send(req.params.name + " : " + req.params.age);
    // Get query string values
    console.log(req.query);
});

app.listen(3000);

// Use route parameters when you absolutely must have that data
// Use query strings when you want to give some optional settings