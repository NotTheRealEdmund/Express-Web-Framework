const express = require('express');  
const app = express();

app.use('/example', (req, res, next) => {       // Now only the route '/example' can execute middleware    
    console.log(req.url, req.method);
    next();        
});

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(3000);

// localhost:3000 will show 'Hello World!' in browser but nothing in VS code cmd
// localhost:3000/example will show 'Cannot GET /example' in browser but in VS code cmd you'll see '/ GET' which means
// middleware still worked.