//       // task 1
//       // Prompt the user to enter a character
//       var character = prompt("Enter a character:");

//       // Get the ASCII code of the character
//       var asciiCode = character.charCodeAt(0);

//       // Check if the character is a number
//       if (asciiCode >= 48 && asciiCode <= 57) {
//       alert("The input is a number.");
//       }
//       // Check if the character is an uppercase letter
//       else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("The input is an uppercase letter.");
//       }
//       // Check if the character is a lowercase letter
//       else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("The input is a lowercase letter.");
//       }
//       // If none of the above conditions match, the input is not a number or a letter
//       else {
//     alert("The input is not a number or a letter.");
//       }


// // task 2
//          // Prompt the user to enter the first integer
//          var firstInteger = parseInt(prompt("Enter the first integer:"));

//          // Prompt the user to enter the second integer
//          var secondInteger = parseInt(prompt("Enter the second integer:"));
   
//          // Check if the first integer is greater than the second integer
//          if (firstInteger > secondInteger) {
//          document.write("<h3>The larger number is: " + firstInteger + "</h3>");
//          }
//          // Check if the second integer is greater than the first integer
//          else if (secondInteger > firstInteger) {
//          document.write("<h3>The larger number is: " + secondInteger + "</h3>");
//          }
//          // If none of the above conditions match, the two integers are equal
//          else {
//          document.write("<h3>The two integers are equal.</h3>");
//          }


// // task 3
// var number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
// document.write("<h3>The number is positive.</h3>");
// }
// else if (number < 0) {
// document.write("<h3>The number is negative.</h3>");
// }
// else {
// document.write("<h3>The number is zero.</h3>");
// } 

// // task 4

// function isVowel(character) {
    
//     var lowerCharacter = character.toLowerCase();
  
//     // Check if the character is a vowel
//     if (
//       lowerCharacter === "a" ||
//       lowerCharacter === "e" ||
//       lowerCharacter === "i" ||
//       lowerCharacter === "o" ||
//       lowerCharacter === "u"
//     ) {
//       return true; //  vowel
//     } else {
//       return false; // not a vowel
//     }
//   }
  
//   var input = prompt("Enter a character:");
//   var result = isVowel(input);
  
//   console.log(result);



// //   task 5

// var correctPassword = "Mynhibataonga";

// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
 
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
  
//   alert("Correct! The password you entered matches the original password.");
// } else {
 
//   alert("Incorrect password.");
// }


  
// //   task 6
// // var greeting;
//       // var hour = 13;
//       // if (hour < 18) {
//       // greeting = "Good day";
//       // else
//       // greeting = "Good evening";
//       // }

//       var greeting;
//       var hour = 13;
//       if (hour < 18) {
//       greeting = "Good day";
//       } else {
//       greeting = "Good evening";
//       }


// // task 7
// var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

// var hour = parseInt(time.substring(0, 2));

// // Determine the appropriate case based on the hour
// if (hour >= 0 && hour < 12) {
// document.write("<h3>Good morning!</h3>");
// } else if (hour >= 12 && hour < 18) {
// document.write("<h3>Good afternoon!</h3>");
// } else if (hour >= 18 && hour < 24) {
// document.write("<h3>Good evening!</h3>");
// } else {
// document.write("<h3>Invalid time entered.</h3>");
// }




