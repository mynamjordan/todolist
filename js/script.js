
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    let showActiveButton = document.getElementById("show-active");
    let showAllButton = document.getElementById("show-all");


    
    
    
    
   
    let templateElement = document.getElementById("list-item-template");
    /* Lets get the template, which is just all the HTML beteen the <script> tag */
    let template = templateElement.innerHTML;
    
    
    /* Step 2. Lets write the function to handle the 'click' event
    ---------------------------------------------------------------*/
    function saveTask(name, isCompleted){
        localStorage.setItem(name, isCompleted)
    }

    function renderTasks() {
        for (let i=0; i < localStorage.length; i++){
            let taskName = localStorage.key(i);
            let isCompleted = localStorage.getItem(taskName) == "true"
            let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

            if (!isCompleted){
                todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
            }
        }
    }

    function onAddTaskClicked(event) {
        let taskName = newTaskInput.value;
        newTaskInput.value = "";
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    
        todoListContainer.insertAdjacentHTML('beforeend', taskHTML);

        saveTask(taskName, false)
    }
    
    
   
    function onTodolistClicked(event) {
        
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
        let taskNameElement = targetElement.querySelector(".task-name");
        let taskName = taskNameElement.innerHTML

        saveTask(taskName, checkbox.checked);

    }
    
    function showActiveTasks(){
        let tasks = document.getElementsByClassName("task")
        for (let i=0; i < tasks.length; i++){
            if(tasks[i].classList.contains("completed")){
                tasks[i].style.display = "none"
             } else {
                tasks[i].style.display = "block"
                }
            }
        }

    function showAllTasks(){
        /*let tasks = document.getElementsByClassName("task")
        for (let i=0; i < tasks.length; i++){
                tasks[i].style.display = "block"
             }
             */
             for (let i=0; i < localStorage.length; i++){
                let taskName = localStorage.key(i);
                let isCompleted = localStorage.getItem(taskName) == "true"
                let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
                todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
                
            }

        }
        
    
        
    
    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);
    showActiveButton.addEventListener('click', showActiveTasks);
    showAllButton.addEventListener('click', showAllTasks);
    renderTasks();