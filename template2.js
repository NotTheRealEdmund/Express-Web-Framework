const express = require('express');  
const app = express();

app.set('view engine', 'ejs');        

app.get('/', (req,res) => {                                    
    res.render('mytemplate2', {items : [
        {name: 'Apple'},
        {name: 'Chicken'},
        {name: 'Vegetable'}
    ]});     
});                        

app.listen(3000);