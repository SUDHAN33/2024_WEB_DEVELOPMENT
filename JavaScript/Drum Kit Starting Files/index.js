
var drumItemsLength = document.querySelectorAll(".drum").length;

for(var i=0;i<drumItemsLength;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var word = this.innerHTML;
        makeSound(word);
        buttonAnimation(word);
    })
}

document.addEventListener("keypress",(event)=>{
      makeSound(event.key);
      buttonAnimation(event.key);
})

function makeSound(word){
    switch(word){
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;
        case 's':
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
            break;
        case 'd':
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;
        case 'j':
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
            break;
        case 'k':
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;
        case 'l':
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;
        default : console(word);
    }
}

function buttonAnimation(word){
    var pressedKey = document.querySelector("."+word);
    pressedKey.classList.add("pressed");
    setTimeout(()=>{pressedKey.classList.remove("pressed")},100);
}