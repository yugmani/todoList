var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

// Array of todos
// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

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
        liEl.setAttribute('data-index', i);
        liEl.appendChild(btnEl);
        // console.log(btnEl);
    }
    
}


function init() {
    // Write code here to check if there are todos in localStorage
    // If so, parse the value from localStorage and assign it to the todos variable
    var todoLocal = JSON.parse(localStorage.getItem("todos"));
    if (todoLocal) {
        
        todos = todoLocal;
    } 
    else {
        console.log("Not available in local storage");
    }

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodo();
  }
  
  function storeTodos() {
    // Add code here to stringify the todos array and save it to the "todos" key in localStorage
    localStorage.setItem("todos",  JSON.stringify(todos));
  }
  

// Eventlistner to add new todo in todo list. 
todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    var newTodo = todoInput.value.trim();
        if (newTodo !== "") {
            todos.push(newTodo);
            todoInput.value = ("");
            
        }
        else return;  
    storeTodos();
    renderTodo();
})


// Eventlistenr to remove a todo from the list.
todoList.addEventListener("click", function(event){
    var element = event.target;
  
    if (element.matches("button") === true){
        //getting data-index of the li parent-element of corresponding button clicked.
        var index = element.parentElement.getAttribute("data-index");

    // removing element[index] from Todos array. 
        todos.splice(index, 1);

    //update renderTodo and storeTodos.
        renderTodo();
        storeTodos();   
    }
    
})