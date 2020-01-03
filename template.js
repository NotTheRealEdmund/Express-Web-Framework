const express = require('express');  
const app = express();

// Set the express app to use “view engine” of “ejs”.
app.set('view engine', 'ejs');        

// In template.js instead of sending a static file, now you'll be sending dynamic data.
// Take note that userQuery is a route parameter.
// We render the mytemplate.ejs file (don't need to specify .ejs)
// Second parameter is the data we're receiving and want to display within our mytemplate.ejs to the user.
// In this case, it's the route parameter userQuery. 
app.get('/:userQuery', (req,res) => {                                    
    res.render('mytemplate', {exampleVar : req.params.userQuery});     
});                        

app.listen(3000);