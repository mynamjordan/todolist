// Step 1: Find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")



// Step 2: Write funtion to implement the behavior
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    console.log(taskName)
}



// Step 3: Link elements, function and event
addTaskButton.addEventListener('click', onAddTaskClicked)