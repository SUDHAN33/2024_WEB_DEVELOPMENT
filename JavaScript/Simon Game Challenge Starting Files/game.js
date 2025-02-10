
var gamePattern = [];

var buttonColors = ["red","blue","green","yellow"];

var userClickedPattern = [];

$(".btn").click(()=>{

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

})

function nextSequence(){
    var randomNumber =  Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];

     gamePattern.push(randomChosenColor);

     $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

     var sound = new Audio("./sounds/"+randomChosenColor+".mp3");
     sound.play();

}

functin