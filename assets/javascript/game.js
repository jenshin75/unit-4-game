var targetNumber = 53;
$("#number-to-guess").text(targetNumber);

var heart = "./assets/images/heart.jpg";
var pentagon = "./assets/images/pentagon.jpg";
var square = "./assets/images/square.jpg";
var triangle = "./assets/images/triangle.jpg";
var counter = 0;
var imageurl = [heart, pentagon, square,triangle];
console.log(imageurl);

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7];

var computerGuess = Math.floor(Math.random() * 102) + 19;

// For each iteration, we will create an imageCrystal
//   var imageCrystal = $("<img>");

//   // First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
//   imageCrystal.addClass("crystal-image");

//   // Each imageCrystal will be given a src link to the crystal image
//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//   // Each imageCrystal will be given a data attribute called data-crystalValue.
//   // This data attribute will be set equal to the array value.
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
 

//   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//   $("#MyTest").append(imageCrystal);


//   var imageCrystal = $("<img>");

//   // First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
//   imageCrystal.addClass("crystal-image");

//   // Each imageCrystal will be given a src link to the crystal image
//   imageCrystal.attr("src", "./assets/images/square.jpg");

//   // Each imageCrystal will be given a data attribute called data-crystalValue.
//   // This data attribute will be set equal to the array value.
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
 

//   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//   $("#MyTest").append(imageCrystal);

//   var  newImage = "<img class='crystal-image' src='./assets/images/square.jpg' data-crystalvalue='3'>"
//   $("#MyTest").append(newImage);


// Next we create a for loop to create crystals for every numberOption.
var crystalValue = [];

for (var i = 0; i < imageurl.length; i++) {

crystalValue[i] = Math.floor(Math.random() * 12) + 1;

// For each iteration, we will create an imageCrystal
var imageCrystal = $("<img>");

// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
imageCrystal.addClass("crystal-image");

// Each imageCrystal will be given a src link to the crystal image
imageCrystal.attr("src", imageurl[i]);

// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
imageCrystal.attr("data-crystalvalue", i);
    
// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
$("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

var crystalValue = ($(this).attr("data-crystalValue"));
crystalValue = parseInt(crystalValue);

// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from every crystal adds to the global counter.

counter += crystalValue;

// All of the same game win-lose logic applies. So the rest remains unchanged.
alert("New score: " + counter);

if (counter === targetNumber) {
alert("You win!");
}

else if (counter >= targetNumber) {
alert("You lose!!");
}

});
