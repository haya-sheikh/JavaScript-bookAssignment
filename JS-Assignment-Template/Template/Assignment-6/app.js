// // chapter6
// // task1
// var num = 10;
// document.write("the value of a is :" + num);
// var num = ++num;
// document.write("<br>the value of ++a is :" + num);
// var num = num++;
// document.write(" <br>value of ++a is:" + num);
// var num = --num;
// document.write(" <br>value of --a is:" + num);
// var num = num--;
// document.write(" <br>value of a-- is:" + num);

// // // task2
// var a = 2;
// var b = 1;
// document.write(+--a + "<br>");
// document.write(+--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");
// document.write(--a - --b + ++b + b + "<br>");
// var result = --a - --b + ++b + b--;
// document.write(result);
// document.write("<br>a is" + a);
// document.write("<br>b is" + b);
// document.write("<br>result is" + result);

// // task3
// var enter = prompt("enter Name");
// var msg = "G'day! Welcome ";
// alert(msg + ' ' + enter);

// // task 4 : -

// // task5
// var number = parseInt(prompt("Enter a number"));
// if (isNaN(number)) {
//   number = 5;
// }

// document.write("<h2>Table of " + number +"</h2>")

// for (var i = 1; i <= 10; i++) {
//     var result = number * i
//     document.write(number+ " x " + i + "=" + result + "<br>")
// }

// // task 6 
// var subject1 = prompt("Enter the name of subject 1:");
// var subject2 = prompt("Enter the name of subject 2:");
// var subject3 = prompt("Enter the name of subject 3:");

// var totalMarks = 100;

// var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

// var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));


// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");
