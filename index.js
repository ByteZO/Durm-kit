

// TO count the numbr of drums..

var numOfintruments = document.querySelectorAll(".drum").length;

// loop to add eventlistener 

for (var i = 0; i < numOfintruments; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // then pass the inner text to  playSound function and addAnimation function

        var intext = this.innerHTML;
        playSound(intext);
        addAnimation(intext);
    });
}


// adding a eventlistner to all to the whole documant  to get the keyboard input 

document.addEventListener('keydown', (event) => {
    var keystroke = event.key;
    playSound(keystroke);
    addAnimation(keystroke);
});

//function to play the audio

function playSound(key) {
    switch (key) {
        case "w":
        case "W":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
        case "A":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
        case "S":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
        case "D":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
        case "J":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
        case "K":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
        case "L":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("press one of them => a,s,d,j,k,l");
    }
}
// function to run the animation 

function addAnimation(currentKey) {
    var className = document.querySelector("." + currentKey);
    className.classList.add("pressed");
    setTimeout(() => className.classList.remove("pressed"), 100);
}


