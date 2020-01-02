const express = require('express');
const path = require('path');    
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));  

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));                                                            
});  

// body-parser module
const bodyParser = require('body-parser'); 

// Now we'll use middleware. This lets us parse url encoded forms, it parses the data for us and attaches it to the request body.
app.use(bodyParser.urlencoded({extended: true}));   

app.post('/', (req,res) => {
    // This will return an object with the properties of email and password.
    console.log(req.body);      

    // You can do all your database work here.

    // When finished, assign a response to user.
    res.send('Successfully posted data');      
});

app.listen(3000);