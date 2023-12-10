// Get references to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item and set its content to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a 'close' span for the list item
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";

        // Append the 'close' span to the list item
        li.appendChild(span);
    }
    
    // Clear the input box after adding the task
    inputBox.value = "";
    
    // Save the updated list data to local storage
    saveData();
}

// Event listener for handling task completion or deletion
listContainer.addEventListener("click", function(e) {
    // Toggle task completion when clicking on a list item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save updated data
    } 
    // Remove the task when clicking on the 'close' span
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save updated data
    }
}, false);

// Function to save the list data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Show tasks from local storage when the page loads
showTask();
