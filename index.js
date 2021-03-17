
// Detects button presses from the mouse
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    });
}

// Detecting keyboard presses
// Used the word "document" to add this event listener to the whole document instead of just specific parts
document.addEventListener("keydown", function(e) {
    console.log("Before");
    console.log(e);
    console.log("After");

    // access the key from the return value
    makeSound(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            // this is how you create an HTML audio element
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            // this is how you create an HTML audio element
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            // this is how you create an HTML audio element
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            // this is how you create an HTML audio element
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}
