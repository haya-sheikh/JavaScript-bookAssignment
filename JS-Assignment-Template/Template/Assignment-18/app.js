// // task 1 

// var imageContainer = document.getElementById("imageContainer");
// var modalContent = document.getElementById("modalContent");
// var modalImage = document.getElementById("modalImage");

// var images = [
//   { src: "https://i.pinimg.com/564x/c6/c5/dd/c6c5dd319244524844474ce600b90892.jpg", alt: "Image 1" },
//   { src: "https://i.pinimg.com/564x/4d/2b/2c/4d2b2c2b44326f2256ece873602cf9d8.jpg", alt: "Image 2" },
//   { src: "https://i.pinimg.com/564x/6b/14/3e/6b143ea13d391f23723275acd9d841fe.jpg", alt: "Image 3" },
//   { src: "https://i.pinimg.com/564x/9d/d9/d3/9dd9d3396cdcbfa8a07dcddbc6887d97.jpg", alt: "Image 4" }
// ];

// // Create image elements and attach click event listeners
// images.forEach(function(image) {
//   var imageElement = document.createElement("img");
//   imageElement.src = image.src;
//   imageElement.alt = image.alt;
//   imageElement.onclick = function() {
//     openModal(image.src);
//   };

//   imageElement.style.width ="100px"

//   var imageContainer = document.getElementById("imageContainer");
//   imageContainer.appendChild(imageElement);
// });

// function openModal(imageUrl) {
//   modalImage.src = imageUrl;
//   modalContent.style.display = "block";
// }

// window.onclick = function(event) {
//   if (event.target === modalContent) {
//     modalContent.style.display = "none";
//   }
// };
  

// // task 2

// var zoomedText = document.getElementById("zoomedText");
// var zoomInButton = document.getElementById("zoomInButton");
// var zoomOutButton = document.getElementById("zoomOutButton");

// var fontSize = 16; // Initial font size in pixels

// zoomInButton.addEventListener("click", function() {
//   fontSize += 10; // Increase font size by 10 pixels
//   zoomedText.style.fontSize = fontSize + "px";
// });

// zoomOutButton.addEventListener("click", function() {
//   if (fontSize > 10) {
//     fontSize -= 10; // Decrease font size by 10 pixels
//     zoomedText.style.fontSize = fontSize + "px";
//   }
// });