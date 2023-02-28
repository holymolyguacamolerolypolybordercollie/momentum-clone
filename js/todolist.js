const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
    const newTodo = document.querySelector(".todo-form input");


todoForm.addEventListener("submit", onSubmitTodoForm);

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}


function onSubmitTodoForm(event){
    event.preventDefault();
    const addedList = document.createElement("li");
    const addedSpan = document.createElement("span");
    const addedBtn = document.createElement("button");

    
    addedBtn.addEventListener("click", deleteTodo);
   
    addedSpan.innerText = `${newTodo.value}`;
    addedBtn.innerText = "X";

    addedList.appendChild(addedSpan);
    addedList.appendChild(addedBtn);
    todoList.appendChild(addedList);
    newTodo.value="";
} ;

