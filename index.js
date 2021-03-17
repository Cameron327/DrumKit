
// Detects button presses from the mouse
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // This is inside the callback function that is being called by the event listener
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

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

    buttonAnimation(e.key);
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
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {
    // since we want to query the specific key, we can query the class name
    var activeButton = document.querySelector("." + currentKey);

    // go into that button's class list and toggle the class
    activeButton.classList.add("pressed");
    // since we don't want the button to be faded forever, we have to add a delay and then remove the class for the animation effect
    // The first param of the setTimeout function will be the functoin that we want to run after a certain amount of time. 
    // We will use an anonymous function
    // The second param will be the amount of milliseconds
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

}

