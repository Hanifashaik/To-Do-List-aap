function addTask() {
    let task = document.getElementById("new-task");
    let tasklist = document.getElementById("task-list");
    
    if (task.value === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item for the task
    let newTask = document.createElement("li");

    // Set the task text inside a span so we can control styling separately
    let taskText = document.createElement("span");
    taskText.innerText = task.value;
    newTask.appendChild(taskText);

    // Container for the buttons
    let container = document.createElement('div');
    container.className = "task-button";

    // Delete button
    let buttond = document.createElement('button');
    buttond.className = "btn1";
    buttond.innerText = "Delete";
    buttond.onclick = function() {
        tasklist.removeChild(newTask);
    };

    // Completed button
    let buttonC = document.createElement('button');
    buttonC.className = "btn2";
    buttonC.innerText = "Completed";
    buttonC.onclick = function() {
        taskText.classList.toggle('completed');  // Toggles line-through on the task text only
    };

    container.appendChild(buttond);
    container.appendChild(buttonC);
    newTask.append(container);
    tasklist.append(newTask);
    task.value = ""; // Clear the input field after adding
}
