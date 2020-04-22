const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, function(){
console.log('server running at port : '+ port );

});

app.get('/bmicalculator', function(req, res){

  res.sendFile(__dirname + "/index.html");

});


app.post('/bmicalculator',function(req,res){
  var h = Number(req.body.h);
  var w = Number(req.body.w);
  var bmi  = Math.round(w/(h*h));
  var bmi_style = "<h1 style= 'display:inline;'><em>"+ bmi + "</em></h1>";
  res.send("<h1 style= 'display:inline;'><em>Your BMI is : </em></h1>" + bmi_style);

});
