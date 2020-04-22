const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, function(){
console.log('server running at port : '+ port );

});

app.get('/', function(req, res){

  res.sendFile(__dirname + "/index.html");

});


app.post('/',function(req,res){
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var num3  = Number(num1) + Number(num2);
  res.send("Number is : " + num3);

});
