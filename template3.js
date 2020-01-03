const express = require('express');  
const app = express();

app.set('view engine', 'ejs');        

app.get('/', (req,res) => {                                    
    res.render('mytemplate3', {people : [
        {name: 'Tom', age: 16},
        {name: 'John', age: 18},
        {name: 'Mary', age: 20}
    ]});     
});                        

app.listen(3000);