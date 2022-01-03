var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(level);
});
$(document).keypress(function(event){
  if (level == 0){
    $("h1").text("Level 0");
    nextSequence();
  }
})

function checkAnswer(currentLevel){
      if (userClickedPattern.length == gamePattern.length){
        if (userClickedPattern[currentLevel - 1] == gamePattern[currentLevel - 1]){
          setTimeout(function(){
            nextSequence();
          },1000);

          userClickedPattern = [];
        }
        else{
          userClickedPattern = [];
          gamePattern = [];
          level = 0;
          $("h1").text("Game Over, Press Any Key to Restart");
          $("body").addClass("game-over");
          setTimeout(function(){
            $("body").removeClass("game-over");
          },200);

        }
      }



  }


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level = level + 1 ;
  $("h1").text("Level "+ level);
}
function playSound(name){
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed",100);
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
