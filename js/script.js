// Step 1: Find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer = document.getElementById("todo-list")



// Step 2: Write funtion to implement the behavior
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    console.log(taskName)
    todoListContainer.insertAdjacentHTML("afterbegin", taskName);
}



// Step 3: Link elements, function and event
addTaskButton.addEventListener('click', onAddTaskClicked);