// // Task 1

// var signupForm = document.getElementById("signupForm");
// var formDataDisplay = document.getElementById("formDataDisplay");

// signupForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   var formData = {
//     Name: name,
//     Email: email,
//     Password: password
//   };

//   displayFormData(formData);
//   signupForm.reset();
// });

// function displayFormData(formData) {
//   var formResult = document.createElement("div");
//   formResult.innerHTML = "<p><strong>Name:</strong> " + formData.Name + "</p>"
//                        + "<p><strong>Email:</strong> " + formData.Email + "</p>"
//                        + "<p><strong>Password:</strong> " + formData.Password + "</p>";

//   formDataDisplay.appendChild(formResult);
// }


// // Task 2

// function showDetails(button) {
//     var item = button.parentNode.parentNode;
//     var details = item.querySelector(".details");

//     if (details.style.display === "none") {
//       details.innerHTML = "Full details of " + item.querySelector("h2").textContent + " Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//       details.style.display = "block";
//       button.textContent = "Read Less";
//     } else {
//       details.style.display = "none";
//       button.textContent = "Read More";
//     }
//   }


// //   Task 3 

// var studentForm = document.getElementById("studentForm");
// var studentTableBody = document.querySelector("#studentTable tbody");
// var editForm = document.getElementById("editForm");

// studentForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var name = document.getElementById("name").value;
//   var age = document.getElementById("age").value;
//   var grade = document.getElementById("grade").value;

//   addStudentToTable(name, age, grade);
//   studentForm.reset();
// });

// function addStudentToTable(name, age, grade) {
//   var row = document.createElement("tr");

//   row.innerHTML = "<td>" + name + "</td>"
//                 + "<td>" + age + "</td>"
//                 + "<td>" + grade + "</td>"
//                 + "<td><button onclick='deleteRow(this)'>Delete</button> <button onclick='editRow(this)'>Edit</button></td>";

//   studentTableBody.appendChild(row);
// }

// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.remove();
// }

// function editRow(button) {
//   var row = button.parentNode.parentNode;
//   var name = row.cells[0].textContent;
//   var age = row.cells[1].textContent;
//   var grade = row.cells[2].textContent;

//   var editForm = document.getElementById("editForm");
//   editForm.innerHTML = "<h2>Edit Student</h2>"
//                      + "<label for='editName'>Name:</label>"
//                      + "<input type='text' id='editName' value='" + name + "' required><br><br>"
//                      + "<label for='editAge'>Age:</label>"
//                      + "<input type='number' id='editAge' value='" + age + "' required><br><br>"
//                      + "<label for='editGrade'>Grade:</label>"
//                      + "<input type='text' id='editGrade' value='" + grade + "' required><br><br>"
//                      + "<input type='submit' value='Update Student'>"
//                      + "<button type='button' onclick='cancelEdit()'>Cancel</button>";

//   editForm}