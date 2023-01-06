// tasks.js
// This script manages a to-do list.

const removeDuplicatesBtn = document.querySelector("#removeDuplicates")

// Need a global variable:
let tasks = [];

removeDuplicatesBtn.addEventListener("click", removeDuplicates);

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    const task = document.getElementById('task');

    // Reference to where the output goes:
    const output = document.getElementById('output');
    
    // For the output:
    let message = '';

    if (task.value) {
        // Add the item to the array:
        tasks.push(task.value);
        updateTaskList();
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;

function removeDuplicates(){
    let result = [];
    if(tasks.length > 0){
        for(let i=0; i <tasks.length-1; i++){
            if(!result.includes(tasks[i]))
                result.push(tasks[i]);
        }
        tasks = result;
        updateTaskList();
    }
}

function updateTaskList(){
    const output = document.getElementById('output');

        let message = '<h2>To-Do</h2><ol>';
        for (let i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
}