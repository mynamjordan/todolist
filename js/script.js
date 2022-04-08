// Step 1: Find element
let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");

let templateElement = document.getElementById("list-item-template");
let template = templateElement.innerHTML;


// Step 2: Write funtion to implement the behavior
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    

    let taskHTML = template.replace("!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
}

function onTodoListClicked(event) {
    let targetElement = event.target;
    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }
    let checkbox = targetElement.querySelector(".checkbox");

    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }

}



// Step 3: Link elements, function and event
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListClicked);