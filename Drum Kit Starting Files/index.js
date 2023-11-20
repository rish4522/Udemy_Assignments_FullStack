var numOfDrumButtons = document.querySelectorAll(".drum").length;

var arrSounds = ['sounds/crash.mp3','sounds/kick.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];
for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(index){
        return function (){
            this.style.color = "white";
            var audio = new Audio(arrSounds[index]);
            audio.play();
        };

    }(i));
}