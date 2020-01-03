const express = require('express');
const path = require('path');    
const app = express();
// Module to validate the user input in app.post
const Joi = require('joi'); 

app.use('/public', express.static(path.join(__dirname, 'static')));  

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));                                                            
});  

const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());              

// Makes sure the email/password the user gives us is valid by enforcing a set of rules for the inputs
app.post('/', (req,res) => {
    console.log(req.body);

    // Create a schema, a set of rules that the data we're receiving must follow    
    const schema = Joi.object().keys({
        // This states that the email field must be a string value, trim method is always used, email() method
        // checks if it's a valid email, required() method will give an error if the user does not fill in anything
        email: Joi.string().trim().email().required(),

        // This states that there must be a minimum of 5 characters and maximum 10 characters, string and required
        password: Joi.string().min(5).max(10).required(),
    });   

    // Take action depending on whether the input is valid or not
    Joi.validate(req.body, schema, (err,result) => {         
        console.log(result);
        if (err) {
            console.log(err);
            res.json({success : false});
        } else {
            res.json({success : true});
        }
    });

});

app.listen(3000);