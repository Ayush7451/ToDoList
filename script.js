// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function createTaskItem(taskText, taskCategory, taskPriority) {
    const listItem = document.createElement("li");
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText + " (" + taskCategory + ")"; 
    listItem.appendChild(taskTextElement);

    const priorityElement = document.createElement("span");
    priorityElement.innerText = "Priority: " + taskPriority;
    listItem.appendChild(priorityElement);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", function () {
        taskTextElement.style.textDecoration = "line-through";
    });
    listItem.appendChild(completeButton);

    return listItem;
}

function addTask() {
    const taskText = taskInput.value.trim();
    const taskCategory = document.getElementById("taskCategory").value;
    const taskPriority = document.getElementById("taskPriority").value;
    if (taskText !== "") {
        const listItem = createTaskItem(taskText, taskCategory, taskPriority);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

// Event listener for the "Add" button
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addTaskBtn").addEventListener("click", addTask);

    // Event listener for "Enter" key press in the input field
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
