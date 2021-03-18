var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

var createTaskHandler = function() {
    
    event.preventDefault();

    var listedItemEl = document.createElement("li");
    listedItemEl.className = "task-item";
    listedItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listedItemEl);

}

formEl.addEventListener("submit", createTaskHandler);


