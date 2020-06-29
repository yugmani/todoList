var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");



// Array of todos
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodo();
// function to render the each item of todos array.
function renderTodo(){
    todoList.textContent = "";
    todoCountSpan.textContent = todos.length;
    
    for (let i=0; i< todos.length; i++){
        //creating li element
        var liEl = document.createElement("li");
        liEl.textContent = todos[i];
        todoList.appendChild(liEl);

        //creating btn element
        var btnEl = document.createElement("button");
        btnEl.textContent = "Compelete";
        btnEl.setAttribute('data-index', i);
        liEl.appendChild(btnEl);
    }
    
}

// Eventlistner to add new todo in todo list. 
todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    var newTodo = todoInput.value.trim();
        if (newTodo !== "") {
            todos.push(newTodo);
            todoInput.value = ("");
            renderTodo();
        }
        else return;  
})


// Eventlistenr to remove a todo from the list.
todoList.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index");

        todos.splice(index, 1);
        renderTodo();
    }

})