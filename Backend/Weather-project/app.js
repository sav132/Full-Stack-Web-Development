const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));




app.listen(port, function(){
console.log('server running at port : '+ port );

});



app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");

});

app.post('/',function(req,res){


    const cityname = req.body.cityname;
    const units = "metric";
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+ cityname + "&appid=<enter your appid here>&units="+units;

    http.get(url, function(response){

      response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon  = weatherData.weather[0].icon;
      console.log(response.statusCode, temp);

      res.write("<h1>Temperature in "+cityname+" is :"+temp +" degree Celcius</h1>");
      res.write("<h2> Description : "+ description +"</h2>");
      res.write("<img src='http://openweathermap.org/img/wn/"+ icon + "@2x.png'>");

      res.send();


        });

    });
});
