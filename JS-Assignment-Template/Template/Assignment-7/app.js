// // task1
// var cityName = prompt("Enter the city name:");
// if (cityName.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights!");
// }


// // task2
// var gender = prompt("Enter your gender:");
// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma'am.");
// } else {
//   alert("Good Morning!");
// }

// // task3
// var signalColor = prompt("Enter the color of the traffic signal:");
// signalColor = signalColor.toLowerCase();
// if (signalColor === "red") {
//   alert("Must Stop");
// } else if (signalColor === "yellow") {
//   alert("Ready to move");
// } else if (signalColor === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid color");
// }


// // task4
// var remainingFuel = +prompt(
//     "Enter the remaining fuel in your car (in liters):"
//   );
//   if (remainingFuel < 0.25) {
//     document.write("<h2>Please refill the fuel in your car.</h2>");
//   } else {
//     document.write("<h3>Fuel level is sufficient. Have a safe journey!</h3>");
//   }



// // task5a
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// // task5b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// // task5c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// // task5d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// // task5e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// // task5f
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }


// // task6
// var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade;
// if (percentage >= 80) {
//   grade = "A+";
// } else if (percentage >= 70) {
//   grade = "A";
// } else if (percentage >= 60) {
//   grade = "B";
// } else if (percentage >= 50) {
//   grade = "C";
// } else if (percentage >= 40) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write ("<h2>Mark Sheet</h2>")
// document.write ("<h3>TotalMarks: " + totalMarks + "</h3>")
// document.write ("<h3>Marks Obtained :" +totalObtainedMarks+ "</h3>")
// document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
// document.write("<h3>Grade: " + grade + "</h3>");

// // task 7

// var secretNumber=6;
// var guess = +prompt("Take a guess between 1 to 10");
// if (guess == secretNumber) {
//   alert("“Bingo! Correct answer");
// } else if (guess < secretNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Try a lower guess this time!");
// }

// // task8
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//   document.write("<h3>The number " + number + " is divisible by 3.</h3>");
// } else {
//   document.write("<h3>The number " + number + " is not divisible by 3.</h3>");
// }


// //  task9
// var number = +prompt("Enter a number:");
// if (number % 2 === 0) {
//   document.write("<h3>The number " + number + " is even.</h3>");
// } else {
//   document.write("<h3>The number " + number + " is odd.</h3>");
// }

// // task10
// var temperature = +prompt("Enter the temperature in degrees Celsius:");
// if (temperature > 40) {
//   document.write("<h3>It is too hot outside.</h3>");
// } else if (temperature > 30) {
//   document.write("<h3>The weather today is normal.</h3>");
// } else if (temperature > 20) {
//   document.write("<h3>Today's weather is cool.</h3>");
// } else if (temperature > 10) {
//   document.write("<h3>OMG! Today's weather is so cool.</h3>");
// } else {
//   document.write("<h3>It is extremely cold outside.</h3>");
// }

// task 11
 
//  var firstNumber = parseFloat(prompt("Enter the first number:"));


//  var secondNumber = parseFloat(prompt("Enter the second number:"));


//  var operation = prompt("Enter the operation (+, -, *, /, %):");

//  var result;

//  if (operation === "+") {
//  result = firstNumber + secondNumber;
//  } else if (operation === "-") {
//  result = firstNumber - secondNumber;
//  } else if (operation === "*") {
//  result = firstNumber * secondNumber;
//  } else if (operation === "/") {
//  result = firstNumber / secondNumber;
//  } else if (operation === "%") {
//  result = firstNumber % secondNumber;
//  } else {
//  document.write("<h3>Invalid operation.</h3>");

//  throw new Error("Invalid operation.");
//  }

//  document.write("<h3>The calculated result is: " + result + "</h3>");



















































