const express = require('express');     
const route = express.Router();         // Method which returns an instance of the router and save that in a variable

route.get('/', (req,res) => {             
    res.send('/ being hit');           
});

route.get('/example',(req,res) => {           
    res.send('/example being hit');          
});

module.exports = route;     // Expose this route so that our router.js file can access it.