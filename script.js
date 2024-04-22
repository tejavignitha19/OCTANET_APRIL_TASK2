let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let taskItem = document.createElement("li");
        taskItem.classList.add("todo-item");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTaskCompletion);

        let span = document.createElement("span");
        span.textContent = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(span);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function toggleTaskCompletion(event) {
    let checkbox = event.target;
    let taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}

function deleteTask(event) {
    let deleteButton = event.target;
    let taskItem = deleteButton.parentElement;
    taskItem.remove();
}
