const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

const btn = document.createElement("button");
btn.textContent = "추가";

const checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
  
addBtn.addEventListener("click", function(){
  todoList.append(btn);
  todoList.prepend(checkBox);
})