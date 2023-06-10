

// // task 1

// var link = document.getElementById("myLink")

// link.addEventListener("click", function() {
//     alert ("Link clicked!");
// })

// // function deleteRow(e){
// //     var pr=e.parentNode.parentNode
// //     pr.remove()
// // }

// // task 2

// var images = [
//     { src: "image1.jpg", alt: "Image 1" },
//     { src: "image2.jpg", alt: "Image 2" },
//     { src: "image3.jpg", alt: "Image 3" }
//   ];
  
//   var container = document.getElementById("imageContainer");
  
//   images.forEach(function(image) {
//     var imgElement = document.createElement("img");
//     imgElement.src = image.src;
//     imgElement.alt = image.alt;
//     imgElement.onclick = function() {
//       showImageAlert(image);
//     };
//     container.appendChild(imgElement);
//   });
  
//   function showImageAlert(image) {
//     var imageSrc = image.src;
//     var altText = image.alt;
//     alert("Selected Image: " + altText + "\n\nImage URL: " + imageSrc);
//   }

// //   task 3
// var studentData = [
//     { name: "John", rollNo: "101", class: "12th" },
//     { name: "Doe", rollNo: "102", class: "11th" },
//     { name: "James", rollNo: "103", class: "10th" },
//     // Add more student records here...
//   ];

//   var tableBody = document.getElementById("studentTableBody");

//   // Add rows to the table using studentData array
//   studentData.forEach(function(student) {
//     var row = document.createElement("tr");

//     var nameCell = document.createElement("td");
//     nameCell.innerHTML = student.name;
//     row.appendChild(nameCell);

//     var rollNoCell = document.createElement("td");
//     rollNoCell.innerHTML = student.rollNo;
//     row.appendChild(rollNoCell);

//     var classCell = document.createElement("td");
//     classCell.innerHTML = student.class;
//     row.appendChild(classCell);

//     var actionCell = document.createElement("td");
//     var deleteButton = document.createElement("button");
//     deleteButton.className = "delete-btn";
//     deleteButton.innerHTML = "Delete";
//     deleteButton.addEventListener("click", function() {
//       deleteRow(row);
//     });
//     actionCell.appendChild(deleteButton);
//     row.appendChild(actionCell);

//     tableBody.appendChild(row);
//   });

//   function deleteRow(row) {
//     tableBody.removeChild(row);
//   }


// // task 4

// var imageElement = document.getElementById("myImage");
// var initialImage = "initial_image.jpg";
// var changedImage = "changed_image.jpg";

// function changeImage() {
//   imageElement.src = changedImage;
// }

// function revertImage() {
//   imageElement.src = initialImage;
// }


// // task 5

// var counter = 0;
// var counterDisplay = document.getElementById("counterDisplay");

// function increaseCounter() {
//   counter++;
//   counterDisplay.textContent = counter;
// }

// function decreaseCounter() {
//   if (counter > 0) {
//     counter--;
//     counterDisplay.textContent = counter;
//   }
// }

