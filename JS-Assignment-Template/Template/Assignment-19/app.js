// i. Get element of id “main-content” and assign them in a variable.

var mainContent = document.getElementById("main-content")

// i. Display all child elements of “main-content” element.

var children = mainContent.children;
for (var i=0; i < children.length; i++ ){
    console.log(children[i]);
}

// iii. Get all elements of class “render” and show their innerHTML 
// in browser

var renderElement = document.getElementsByClassName("render");
for(var i=0; i < renderElement.length; i++){
    console.log(renderElement[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";

// v. Repeat part iv for id ”last-name” and “email”

var lastNameInput = document.getElementsById("last-name");
lastNameInput.value ="Doe";

var emailInput = document.getElementById("email");
emailInput.value = "johndoe@example.com";

// Task 2

// i. What is node type of element having id “form-content”

var formContent = document.getElementById("form-content");
console.log(formContent.nodeType);

// ii. Show node type of element having id “lastName” and its child node.

var lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType);
console.log(lastNameElement.childNodes[0].nodeType);


// iii. Update child node of element having id “lastName”.

lastNameElement.childNodes[0].nodeValue = "New Last Name: Bank";

// iv. Get the first and last child of the element with the id "main-content".

var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;
console.log(firstChild);
console.log(lastChild);

// v. Get the next and previous siblings of the element with the id "lastName".

var lastNameElement = document.getElementById("lastName");
var nextSibling = lastNameElement.nextSibling;
var previousSibling = lastNameElement.previousSibling;
console.log(nextSibling);
console.log(previousSibling);

// vi. Get the parent node and node type of the element with the id "email".

var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
console.log(parentNode);








