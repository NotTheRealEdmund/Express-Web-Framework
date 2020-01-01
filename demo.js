const express = require('express');
const path = require('path');       //an utility module to deal with paths to make our life easier
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));     
//app.use means you're using middleware, first argument is alias for our static folder which our client sees
//second argument is our middleware function
//first argument of middleware function is __dirname which gives our current directory so we don't have to write it out
//now we'll go inside the static folder by passing in the real name of the folder as second argument of our middleware function

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html')); //send a file to our current directory via __dirname
                                                                //go inside the static folder, then serve/send the html file
});

app.listen(3000);