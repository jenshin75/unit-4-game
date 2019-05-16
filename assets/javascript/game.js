// The example below shows $( document ).ready() and $( window ).on( "load" ) in action.
// The code tries to load a website URL in an <iframe> and checks for both events.
// $(document).ready(function () {
//     console.log("document loaded");
// });

// $(window).on("load", function () {
//     console.log("window loaded");
// });

var targetNumber = 0;

var counter = 0;
var winCounter = 0;
var lossCounter = 0;

var message = "";
var heart = "./assets/images/heart.jpg";
var pentagon = "./assets/images/pentagon.jpg";
var square = "./assets/images/square.jpg";
var triangle = "./assets/images/triangle.jpg";
var imageURL = [heart, pentagon, square, triangle];
// console.log(imageURL);

var crystalValue = [];

// This is the random number shown at the start of the game (between 19 and 120).
function computerNumber() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
}

// Each crystal value will be randomly assigned a hidden value between 1 - 12.

function renderImages() {
    $("#crystals").empty()
    for (var i = 0; i < imageURL.length; i++) {
        crystalValue[i] = Math.floor(Math.random() * 11) + 1;

        // console.log(imageURL);
        // console.log(crystalValue);

        $("#crystalValue").text(crystalValue);

        // For each iteration, we will create an imageCrystal

        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", imageURL[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", i);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }

    // This click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalIndex = parseInt($(this).attr("data-crystalValue"));

        console.log(crystalValue[crystalIndex], crystalIndex)

        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.

        counter += crystalValue[crystalIndex];
        console.log(counter);

        $("#counter").text(counter);

        // All of the same game win-lose logic applies. So the rest remains unchanged.

        if (counter === targetNumber) {
            console.log("You win!");
            winCounter++;
            // targetNumber = 0;
            $("#message").text("You win");
            counter = 0;
            reset()
            // start ()
        }

        else if (counter > targetNumber) {
            console.log("You lose!");
            lossCounter++;
            $("#message").text("You lose");
            // targetNumber = 0;
            counter = 0;
            reset();
            // start()
        }

        $("#winCounter").text(winCounter);
        $("#lossCounter").text(lossCounter);


    });

}

function reset() {
    computerNumber()
    renderImages()
}

reset()