var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

renderTodo();

// Array of todos
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// function to render the each item of todos array.
function renderTodo(){
    todoList.textContent = "";
    todoCountSpan.textContent = todos.length;
    
    todos.forEach(todo => {
        var liEl = document.createElement("li");
        liEl.textContent = todo;
        todoList.appendChild(liEl);
    });
    
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