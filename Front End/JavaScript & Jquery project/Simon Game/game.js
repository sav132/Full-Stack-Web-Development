
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var started = false;
var level = 0;
var gamePattern = [];


$(document).keypress(function() {
  if (!started) {
    $('h1').text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function playSound(name) {
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();

}



function nextSequence() {
  $("img").remove();
  userClickedPattern = [];
  level = level + 1;
  $('h1').text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function animatePress(currentColour) {
  var apprButton = '#' + currentColour;
  $(apprButton).addClass("pressed");
  setTimeout(function(){ $(apprButton).removeClass("pressed");}, 100);

}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {  nextSequence();}, 1000);

      }


   }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");


    $("h1").after('<img src="meme.png" alt="Smiley face" height="242" width="242"></img>');


    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}



function startOver() {
  level = 0;
  gamePattern =[];
  started = false;
}
