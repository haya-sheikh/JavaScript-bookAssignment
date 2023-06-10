
// // // task1

// var number1 = prompt("Enter the first number");
// var number2 = prompt("Enter the second number");
// var sum = parseFloat(number1) + parseFloat(number2);
// document.write("sum of " + number1 + " and " + number2 + " is " + sum);

// // task 2a (subtraction)

// var number1 = prompt("Enter the first number");
// var number2 = prompt("Enter the second number");
// var sum = parseFloat(number1) - parseFloat(number2);
// document.write("difference of " + number1 + " and " + number2 + " is " + sum);

// // task 2b (multiplication)

// var number1 = prompt("Enter the first number");
// var number2 = prompt("Enter the second number");
// var sum = parseFloat(number1) * parseFloat(number2);
// document.write("multiplication of " + number1 + " and " + number2 + " is " + sum);

// // task 2c (division)

// var number1 = prompt("Enter the first number");
// var number2 = prompt("Enter the second number");
// var sum = parseFloat(number1) / parseFloat(number2);
// document.write("division of " + number1 + " and " + number2 + " is " + sum);

// // task 2d (modulus)


// var number1 = prompt("Enter the first number");
// var number2 = prompt("Enter the second number");
// var sum = parseFloat(number1) % parseFloat(number2);
// document.write("modulus of " + number1 + " and " + number2 + " is " + sum);

// // // task3

// // task 3a
// var myVariable;
// // task3b
// myVariable = 2;
// document.write("Value after variable declaration is: " + myVariable + "<br>");
// // task3c
// myVariable = 5;
// //   taskF3d
// document.write("Initial value: " + myVariable + "<br>");
// //   task3e
// myVariable++;
// // task3f
// document.write("Value after increment is: " + myVariable + "<br>");
// // task3g
// myVariable += 7;
// //   task3h
// document.write("Value after addition is: " + myVariable + "<br>");
// // task3i
// myVariable--;
// //   task3j
// document.write("Value after decrement is: " + myVariable + "<br>");
// // task3k
// var remainder = myVariable % 3;
// // task3l
// document.write("The remainder is: " + remainder);


// // task4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR");



// // task5
// var number = +prompt("Enter a number you want the table of:");
// document.write("<h2>Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   var result = number * i;
//   document.write(number + " x " + i + " = " + result + "<br>");
// }


// //   task6
// var celsiusTemperature = 25;
// var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
// document.write(
//   celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>"
// );

// var fahrenheitTemperature2 = 70;
// var celsiusTemperature2 = ((fahrenheitTemperature2 - 32) * 5) / 9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// // task7
// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var item1Total = item1Price * item1Quantity;
// var item2Total = item2Price * item2Quantity;
// var subtotal = item1Total + item2Total;
// var totalCost = subtotal + shippingCharges;
// document.write("<h1>Shopping Cart </h1>");
// document.write("Price of Item 1: " + item1Price + " PKR" + "<br>");
// document.write("Quantity of Item 1: " + item1Quantity + "<br>");
// document.write("Price of Item 2: " + item2Price + " PKR" + "<br>");
// document.write("Quantity of Item 2: " + item2Quantity + "<br>");
// document.write("Shipping Charges: " + shippingCharges + " PKR" + "<br>");
// document.write(
//   "Total Cost of your order is: " + totalCost + " PKR"
// );

// //  task8
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1>Mark Sheet</h1>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");


// // task9
// var usdToPkrRate = 104.8;
// var sarToPkrRate = 28;
// var usdAmount = 10;
// var sarAmount = 25;
// var pkrAmount = usdAmount * usdToPkrRate + sarAmount * sarToPkrRate;
// document.write("<h2>Currency Conversion to PKR</h2>");
// document.write("Total Amount in PKR is " + pkrAmount.toFixed(2) );


// // task10
// var number = 5;
// var result = ((number + 5) * 5) / 2;
// document.write("<h2>Arithmetic Operations</h2>");
// document.write("Initial Number: " + number + " <br>");
// document.write("Result: " + result);

// // task11
// var currentYear = new Date().getFullYear();
// var birthYear = parseInt(prompt("Enter your birth year:"));
// var age1 = currentYear - birthYear;
// document.write("<h3>Age Calculator</h3>");
// document.write("Current Year: " + currentYear +"<br>");
// document.write("Birth Year: " + birthYear +"<br>");
// document.write("Your age is: " + age1);



// // task12
// var radius = 20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;
// document.write("<h2>The Geometrizer</h2>");
// document.write("Radius of circle is: " + radius + "<br>");
// document.write("The Circumference is: " + circumference.toFixed(2)+ "<br>");
// document.write("The Area is: " + area.toFixed(2));

// task 13
// var favoriteSnack = "pizza";
// var currentAge = parseInt(prompt("Enter your current age:"));
// var maximumAge = parseInt(prompt("Enter your maximum age:"));
// var amountPerDay = parseFloat(prompt("Enter the estimated amount of " + favoriteSnack + " you eat per day:"));
// var remainingYears = maximumAge - currentAge;
// var totalAmount = amountPerDay * 365 * remainingYears;
// document.write("<h1>The Lifetime supply Calculator</h1>")
// document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the age of " + maximumAge + ".");









