
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitData', {useNewUrlParser: true, useUnifiedTopology: true});
//This determines how we want the data to be structured
const fruitSchema = new mongoose.Schema({

name : String,
rating :{//Data validation
type: Number,
min:5,
max:10
},
taste: Number
});

//Determining nme of the collection that is going to comply with this schema
//Enter singular name and the name is usually capitalized while declaring model name
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name :"Apple",
  rating:9,
  taste:9

});

// fruit.save();
const pineApple = new Fruit({
  name :"Pine Apple",
  rating:8,
  taste:7

});
const orange = new Fruit({
  name :"Orange",
  rating:8,
  taste:8

});

// Fruit.insertMany([pineApple,orange],function(err){
// if(err){
// console.log(err);
// }
// else{
// console.log("Success");
// }
// });
// fruit.save();



Fruit.find(function(err,fruits){

if(err){
  console.log(err);
}

else{

  mongoose.connection.close();

  fruits.forEach(function(fruit){
    console.log(fruit.name);

  });
}
});

//To update a record

// Fruit.updateOne({_id: '5e9ef1577a614665d1e4fecf' }, { name: 'Apple Computers' },function(err){
//
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("success");
//   }
// });

//To delete a record

// Fruit.deleteOne({ name: 'Apple' }, function (err) {
//     if(err){
//        console.log(err);
//      }
//      else{
//        console.log("success");
//      }
//
// });
