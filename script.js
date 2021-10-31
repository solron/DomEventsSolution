var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDeleteButton(li);						// Add delete button after every new item
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function createDeleteButton(input) {			// Create the button
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	input.appendChild(btn);
	btn.onclick = deleteParent;					// Run deleteParent when button is clicked
}

function deleteParent(event) {					// Delete parent node to delete li and button
	event.target.parentNode.remove();
}

for (var i = 0; i < listItems.length; i++) {	// Create delete button after all existing items
	createDeleteButton(listItems[i]);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);		// Event listener for the ul