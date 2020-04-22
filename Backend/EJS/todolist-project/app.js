const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
var todo = ['Buy Groceries','Read','Write'];
const date = require(__dirname + "/date.js");
var n = date.getDate(); // Datevalue returned from date.js file function called getDate()
//we can use getDate or getDay function in date.js file

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get('/', function(req, res){

  res.render("list",{today: n, newtodos: todo}); // render a file called list and pass that file a variable called full date
   // res.render("list",{today: n, newtodo: todo}); // render a file called list and pass that file a variable called full date

});

app.post("/", function(req,res){
  var item = req.body.userTodo;
  todo.push(item);
  res.redirect("/");

  // res.send("<h1 style= 'display:inline;'><em>Your BMI is : </em></h1>" + bmi_style);

});

app.get("/about",function(req,res){

  res.render("about");

});

app.listen(port, function(){
  console.log('server running at port : '+ port );

});
