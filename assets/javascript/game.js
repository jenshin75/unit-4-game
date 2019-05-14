        // The example below shows $( document ).ready() and $( window ).on( "load" ) in action.
        // The code tries to load a website URL in an <iframe> and checks for both events: 
        $(document).ready(function () {
            console.log("document loaded");
        });

        $(window).on("load", function () {
            console.log("window loaded");
        });



var targetNumber = 0;

var counter = 0;

var heart = "./assets/images/heart.jpg";
var pentagon = "./assets/images/pentagon.jpg";
var square = "./assets/images/square.jpg";
var triangle = "./assets/images/triangle.jpg";
var imageURL = [ heart, pentagon, square, triangle ];
var crystalValue = [];

// console.log(imageURL);

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
// Each crystal should have a random hidden value between 1 - 12.
//var numberOptions = [ 10, 5, 3, 7 ];

// This is the random number shown at the start of the game (between 19 and 120).


//For each iteration, we will create an imageCrystal
// var imageCrystal = $("<img>");

//   // First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
// imageCrystal.addClass("crystal-image");

// //   // Each imageCrystal will be given a src link to the crystal image
// // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

// //   // Each imageCrystal will be given a data attribute called data-crystalValue.
// //   // This data attribute will be set equal to the array value.
// imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
// $("#MyTest").append(imageCrystal);

// var imageCrystal = $("<img>");

//   // First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
// imageCrystal.addClass("crystal-image");

//   // Each imageCrystal will be given a src link to the crystal image
// imageCrystal.attr("src", "./assets/images/square.jpg");

//   // Each imageCrystal will be given a data attribute called data-crystalValue.
//   // This data attribute will be set equal to the array value.
// imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
// $("#MyTest").append(imageCrystal);

// var  newImage = "<img class='crystal-image' src='./assets/images/square.jpg' data-crystalvalue='3'>"
// $("#MyTest").append(newImage);

// Next we create a for loop to create crystals for every numberOption.
// Each crystal should have a random hidden value between 1 - 12.
function computerNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
}

function renderImages () {

    $("#crystals").empty()

    for (var i = 0; i < imageURL.length; i++) {


        crystalValue[ i ] = Math.floor(Math.random() * 12) + 1;


        console.log(imageURL);
        console.log(crystalValue);

        // $("#crystalValue").text(crystalValue);
        $("#crystalValue").text(crystalValue);

        // $("#number-to-guess").text(computerGuess);

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", imageURL[ i ]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", i);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
        var crystalIndex = parseInt($(this).attr("data-crystalValue"));
        //crystalValue = parseInt(crystalValue);
    
        console.log(crystalValue[ crystalIndex ], crystalIndex)
    
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
    
        counter += crystalValue[ crystalIndex ];
        console.log(counter)
    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        //alert("New score: " + counter);
    
        if (counter === targetNumber) {
            console.log("You win!");
            start()
        }
    
        else if (counter > targetNumber) {
            console.log("You lose!!");
            start()
        }
    
    
    });
}
// This time, our click event applies to every single crystal on the page. Not just one.

// restart you need to empty the render area  $(“#crystals”).empty()  
// because if not you will be appending more images every time you restart


function start () {
    computerNumber()
    renderImages()
    // $(“#crystals”).empty()  
}


start(

)



