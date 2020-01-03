const express = require('express');  
const app = express();
const people = require('./routes/people');      // Create a people route

app.use('/people', people);            

app.listen(3000);