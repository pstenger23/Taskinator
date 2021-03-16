var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    
    var listedItemEl = document.createElement("li");
    listedItemEl.className = "task-item";
    listedItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listedItemEl);

}

buttonEl.addEventListener("click", createTaskHandler);


