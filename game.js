
// vars.

var buttonColors = ["red", "yellow", "green", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){
  if (!started) {

    $("#level-title").text("level " + level);
    started = true;
    nextSequence();
  }
});

// played.

function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColors = buttonColors[randomNumber];

  gamePattern.push(randomChosenColors);

  $("." + randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColors);
}


// pressed.

  $(".btn").click(function() {

  var userChosenColor = $(this).attr("id");

  playSound(userChosenColor);

  animatePress(userChosenColor);

  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length -1);
  });

  // check.

function checkAnswer(currentLevel){

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("succses");

  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
      nextSequence();
    }, 1000);
  }}else{

    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();

    }
  }

// usable functions.

  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
  }
