var numOfDrumButtons = document.querySelectorAll(".drum").length;

// Method 1
// var arrSounds = ['sounds/crash.mp3','sounds/kick.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];
// for (var i = 0; i < numOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(index){
//         return function (){
//             this.style.color = "white";
//             var audio = new Audio(arrSounds[index]);
//             audio.play();
//         };

//     }(i));
// }

// Method 2

for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSoundKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


        switch (buttonInnerHTML) {
            case "w":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                break;
            case "a":
                    var kick = new Audio('sounds/kick.mp3');
                    kick.play();
                break;
            case "s":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                break;
            case "d":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                break;
            case "j":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;
            case "k":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                break;
            case "l":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                break;
        
            default: console.log(buttonInnerHTML);
                break;
        }
    });
    
}


document.addEventListener("keypress", function(event){
    makeSoundKey(event.key);
    buttonAnimation(event.key);
});

// Keypress

function makeSoundKey(key) {
    switch (key) {
        case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "a":
                var kick = new Audio('sounds/kick.mp3');
                kick.play();
            break;
        case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
        case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
    
        default: console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200  );
}
