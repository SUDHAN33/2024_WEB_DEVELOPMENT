

function randomNumberGenerator(){
    return Math.floor(Math.random()*6)+1;
}

function resultGenerator(){
    if(num1 == num2){
         document.querySelector(".result").innerHTML = "<p>Match Draws !</p>"
    }else if(num1>num2){
        document.querySelector(".result").innerHTML = "<p>Player 1 wins !</p>"
    }else{
        document.querySelector(".result").innerHTML = "<p>Player 2 wins !</p>"
    }
}

var num1 = randomNumberGenerator();
var num2 = randomNumberGenerator();

document.querySelector(".img1").setAttribute("src","./images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+num2+".png");

resultGenerator();

