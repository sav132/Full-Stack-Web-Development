const express = require('express');
const app = express();
const port = 3000;


//app.get determines what should happen when a browser contacts a web server

app.get('/', function(request, response){
response.send("<h1>welcome to express</h1>");
});

app.get('/about', function(req, res){
res.send("<h2><em>This is my bio</em></h2>");
});

app.get('/something', function(req, res){
res.send("<h1><em>just changes</em></h2>");
});


app.listen(port, function(){
console.log('server running at port : '+ port );

});

//Here function() is callback function
