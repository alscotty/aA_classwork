
let todos=[];

let todoUl=document.getElementsByClassName('todos')[0];

let todoForm = document.getElementsByClassName('add-todo-form')[0];

function addTodo(){
  todoForm.addEventListener('submit', e =>{
    e.preventDefault();
    let input= document.getElementsByName('add-todo')[0];
    let value=input.value;
    let todo = {
      something: value
      // done: false,
      // skipped the checkbox functionality
    };
    todos.push(todo);
    input.value = "";
    populateList(todos);

    // attempted to created local storage to preserve todo list on refresh
    stringifiedTodos = JSON.stringify(todos);
    localStorage.setItem("theBox", stringifiedTodos);
    parsedTodos = JSON.parse(stringifiedTodos);
    if (localStorage.getItem("theBox").length === 0){
      todos = [];
    } else {
      populateList(localStorage.getItem("theBox"));
    }
  });
  

}

function populateList(todos){
  for (let i = 0; i < todos.length; i++) {
    let nodeLi = document.createElement('li');
    let nodeLabel = document.createElement('label');
    let nodeText = document.createTextNode(todos[i].something);
    nodeLabel.appendChild(nodeText);
    nodeLi.appendChild(nodeLabel); 
    todoUl.appendChild(nodeLi);  
  }
}

addTodo();
