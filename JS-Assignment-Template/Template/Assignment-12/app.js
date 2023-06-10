// //task 1
// // Positive Integer
// var positiveInteger = parseInt(prompt("Enter a positive integer:"));
// document.write("<h3>Positive Integer:</h3>");
// // 1a
// document.write("Number: " + positiveInteger + "<br>");
// // 1b
// document.write("Round off value: " + Math.round(positiveInteger) + "<br>");
// // 1c
// document.write("Floor value: " + Math.floor(positiveInteger) + "<br>");
// // 1d
// document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br>");

// //task2
// var negativeFloat = parseFloat(prompt("Enter a negative floating-point number:"));
// document.write("<h3>Negative Floating-Point Number:</h3>");
// // 2a
// document.write("Number: " + negativeFloat + "<br>");
// // 2b
// document.write("Round off value: " + Math.round(negativeFloat) + "<br>");
// // 2c
// document.write("Floor value: " + Math.floor(negativeFloat) + "<br>");
// // 2d
// document.write("Ceil value: " + Math.ceil(negativeFloat) + "<br>");


// //task 3
// // Function to calculate the absolute value of a number
// function absoluteValue(number) {
//     if (number < 0) {
//       return -number; // Negate the number if it's negative
//     } else {
//       return number; // Return the number as is if it's positive or zero
//     }
//   }
  
//   // task 4
//   function rollDice() {
//     // Generate a random number between 1 and 6 (inclusive)
//     var diceValue = Math.floor(Math.random() * 6) + 1;
//     return diceValue;
//   }

//   var number = -4;
//   console.log("Absolute value of " + number + " is: " + absoluteValue(number));
  
//   var diceRoll = rollDice();
//   console.log("Dice roll value: " + diceRoll);

//   // task5
// function tossCoin() {
//     // Generate a random number between 0 and 1
//     var randomNum = Math.random();
  
//     if (randomNum < 0.5) {
//       return "Heads"; // If the number is less than 0.5, consider it as "Heads"
//     } else {
//       return "Tails"; // If the number is greater than or equal to 0.5, consider it as "Tails"
//     }
//   }
  
//   var coinResult = tossCoin();
//   document.write("Coin toss result: " + coinResult);

//   //task6
//   // Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("Random number between 1 and 100: " + randomNumber);


// //task 7

// function main() {

//     var userInput = prompt("Enter your weight:");
  
//     var weight = parseFloat(userInput);
  
//     if (Number.isNaN(weight)) {
//       document.write("Invalid input. Please enter a valid weight.");
//     } else {
     
//       document.write("Weight: " + weight + " kgs");
//     }
//   }
  
//   main();


//   //task 8
  
//     // Generate a random secret number between 1 and 10
//     var secretNumber = Math.floor(Math.random() * 10) + 1;

    
//     var userInput = parseInt(prompt("Please enter a number between 1 and 10:"));

   
//     if (userInput === secretNumber) {
//       document.write("Congratulations! You guessed it right.");
//     } else {
//       document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
//     }
 