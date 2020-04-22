
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts =[]; // global array to store all posts



app.get('/', function(req, res){
  res.render("home",{homeContent: homeStartingContent,posts:posts}); // render a file called list and pass that file a variable called full date
   // res.render("list",{today: n, newtodo: todo}); // render a file called list and pass that file a variable called full date

});

app.get('/about', function(req, res){

  res.render("about",{aboutContent: aboutContent}); // render a file called list and pass that file a variable called full date
   // res.render("list",{today: n, newtodo: todo}); // render a file called list and pass that file a variable called full date

});

app.get('/contact', function(req, res){

  res.render("contact",{contactContent: contactContent}); // render a file called list and pass that file a variable called full date
   // res.render("list",{today: n, newtodo: todo}); // render a file called list and pass that file a variable called full date

});

app.get('/compose', function(req, res){

  res.render("compose",{contactContent: contactContent}); // render a file called list and pass that file a variable called full date
   // res.render("list",{today: n, newtodo: todo}); // render a file called list and pass that file a variable called full date

});

app.post("/compose", function(req,res){
  const post = {
              postTitle : req.body.postTitle,
              postContent: req.body.postContent

              };
  posts.push(post);
  res.redirect("/");

  // res.send("<h1 style= 'display:inline;'><em>Your BMI is : </em></h1>" + bmi_style);

});


app.get("/posts/:topic",function(req,res){
  const requestedTitle = _.lowerCase(req.params.topic);
  for(var i =0;i<posts.length;i++){
    if(requestedTitle === _.lowerCase(posts[i].postTitle) ){
            res.render("post",{requestedTitle: posts[i].postTitle, postContent: posts[i].postContent});
          }
          else{
            console.log("not matching !");
          }




  }

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
