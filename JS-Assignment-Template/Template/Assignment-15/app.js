// //task1

// function power(a, b) {
//     var result = Math.pow(a, b);
//     return result;
//   }
  
//   // Call the function to calculate the power of two numbers
//   var base = 2;
//   var exponent = 3;
//   var powerResult = power(base, exponent);
//   console.log(powerResult);

//   //task2
//   function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   // Call the function to check if a year is a leap year
//   var inputYear = 2020;
//   var isLeap = isLeapYear(inputYear);
//   console.log(isLeap);

  
//   //task3
//   function calculateTriangleArea(a, b, c) {
//     var s = (a + b + c) / 2;
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   // Call the function to calculate the area of a triangle
//   var sideA = 3;
//   var sideB = 4;
//   var sideC = 5;
//   var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
//   console.log(triangleArea);

//   //task4
//   function calculateAverage(marks1, marks2, marks3) {
//     var average = (marks1 + marks2 + marks3) / 3;
//     return average;
//   }
  
//   function calculatePercentage(marks1, marks2, marks3) {
//     var totalMarks = 300;
//     var obtainedMarks = marks1 + marks2 + marks3;
//     var percentage = (obtainedMarks / totalMarks) * 100;
//     return percentage;
//   }
  
//   function mainFunction(marks1, marks2, marks3) {
//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3);
  
//     console.log("Average: " + average);
//     console.log("Percentage: " + percentage + "%");
//   }
  
//   // Call the main function to calculate average and percentage of marks
//   var marksSubject1 = 80;
//   var marksSubject2 = 75;
//   var marksSubject3 = 90;
//   mainFunction(marksSubject1, marksSubject2, marksSubject3);

// //task5
// function customIndexOf(string, searchChar) {
//     for (var i = 0; i < string.length; i++) {
//       if (string.charAt(i) === searchChar) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   // Call the function to find the index of a character in a string
//   var inputString = "Hello";
//   var charToSearch = "o";
//   var index = customIndexOf(inputString, charToSearch);
//   console.log(index);

//   //task6
//   function deleteVowels(sentence) {
//     var vowels = ["a", "e", "i", "o", "u"];
//     var result = "";
  
//     for (var i = 0; i < sentence.length; i++) {
//       var currentChar = sentence.charAt(i).toLowerCase();
//       if (!vowels.includes(currentChar)) {
//         result += sentence.charAt(i);
//       }
//     }
  
//     return result;
//   }

// task 7
// function convertToMeters(distance) {
//     return distance * 1000;
//   }
  
//   function convertToFeet(distance) {
//     return distance * 3280.84;
//   }
 
//   function convertToInches(distance) {
//     return distance * 39370.1;
//   }
  
//   function convertToCentimeters(distance) {
//     return distance * 100000;
//   }
  
  
//   function main() {
    
//     var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  
    
//     var distanceInMeters = convertToMeters(distanceInKilometers);
//     console.log("Distance in meters:", distanceInMeters);
  
//     var distanceInFeet = convertToFeet(distanceInKilometers);
//     console.log("Distance in feet:", distanceInFeet);
  
   
//     var distanceInInches = convertToInches(distanceInKilometers);
//     console.log("Distance in inches:", distanceInInches);
  
 
//     var distanceInCentimeters = convertToCentimeters(distanceInKilometers);
//     console.log("Distance in centimeters:", distanceInCentimeters);
//   }
  
//   main();
// //   task 9

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
  
    
//     if (hoursWorked > regularHours) {
//       var overtimeHours = hoursWorked - regularHours;
//       var overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     } else {
//       return 0;
//     }
//   }
  

//   function main() {
    
//     var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
  
   
//     var overtimePay = calculateOvertimePay(hoursWorked);
  

//     console.log("Overtime Pay: Rs.", overtimePay.toFixed(2));
//   }
  

//   main();
// //   task 10

// function calculateCurrencyNotes(amount) {
//     var hundredNotes = Math.floor(amount);
//     var fiftyNotes = Math.floor((amount % 1) * 10 / 5);
//     var tenNotes = Math.floor(((amount % 1) * 10) % 5);
  
//     console.log("Number of 100 notes:", hundredNotes);
//     console.log("Number of 50 notes:", fiftyNotes);
//     console.log("Number of 10 notes:", tenNotes);
//   }
  

//   function main() {
  
//     var amount = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
  
//     calculateCurrencyNotes(amount);
//   }
  
//   main();
  
  
  