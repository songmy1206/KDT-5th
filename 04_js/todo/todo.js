/**
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

addBtn.addEventListener("click", function(){
  const checkBoxEl = document.createElement("input");
  checkBoxEl.setAttribute("type", "checkbox");
  const liEl = document.createElement("li");
  liEl.textContent = inputTask.value;
  const btnEl = document.createElement("button");
  btnEl.textContent = "삭제";

  if(liEl.textContent === ""){
    inputTask.setAttribute("placeholder", "내용을 입력하세요!");
  }else{
    todoList.append(liEl);
    liEl.append(btnEl);
    liEl.prepend(checkBoxEl);
  }

  checkBoxEl.addEventListener("click", function(){
    if(checkBoxEl.checked === true){
      liEl.setAttribute("style", "text-decoration: line-through");
    }else{
      liEl.setAttribute("style", "text-decoration: none");
    }
  })inputTask.value = "";

  btnEl.addEventListener("click", function(){
    if(checkBoxEl.checked === true){
      liEl.remove();
    }else{
      alert("삭제할 항목을 선택해주세요");
    }
  })
})
*/

const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function deleteTask(t){
  t.parentNode.remove();
}

function addList(){
  if(inputTask.value === ""){
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return; //함수종료 -> 중괄호 중첩 잘 안함
  }
  const addLi = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  checkBtn.addEventListener("click", function(){
    if(checkBtn.checked === true){
      checkBtn.parentNode.style.textDecoration = "line-through" //li에 줄긋기
    }else{
      checkBtn.parentNode.setAttribute("style", "text-decoration: none");
    }
  })
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  // deleteBtn.addEventListener("click", function(){
  //   e.target.parentNode.remove();
  // })

  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  addLi.append(checkBtn);
  addLi.append(inputTask.value);
  addLi.append(deleteBtn);
  todoList.appendChild(addLi);

  inputTask.value = "";
}

addBtn.addEventListener("click", addList);

