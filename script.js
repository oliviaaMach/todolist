const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")


// Add task
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } 
    else { let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // appendChild will be display under listContainer.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Add a x to delete the list-item.
        li.appendChild(span);
    }
    inputBox.value = ""; // After adding text to the inputBox, this will remove the text from inputBox after it show on the tasklist.
    saveData(); // calling the function saveData
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") { // if we have clicked on LI
        e.target.classList.toggle("checked"); // it should add the "checked box"
        saveData(); // calling the function saveData
    }
    else if(e.target.tagName === "SPAN") { // if we have clicked on the span, 
        e. target.parentElement.remove(); // this will happen. 
        saveData(); // calling the function saveData
    }
}, false);


// Save the information even if we refresh the page.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


// Display the data 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();  // Calling the function

