module.exports.getDate = getDate;

function getDate(){

  var date = new Date();

  var options = { weekday: 'long', month: 'long', day: 'numeric' };

  return  date.toLocaleDateString("en-US",options);

}
module.exports.getDay = getDay;

function getDay(){

  var date = new Date();

  var options = { weekday: 'long'};

  return date.toLocaleDateString("en-US",options);
  
}
