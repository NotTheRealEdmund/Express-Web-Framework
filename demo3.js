const express = require('express');
const path = require('path');    
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));  

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));                                                            
});  

const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: true}));

// Include this line to work with JSON data
app.use(bodyParser.json());                            

app.post('/', (req,res) => {
    console.log(req.body);      
    // Now instead of assigning a plain text response to user, we're going to respond back to the client using JSON.
    res.json({success : true});      
});

app.listen(3000);