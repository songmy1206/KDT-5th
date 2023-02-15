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
  })

  btnEl.addEventListener("click", function(){
    if(checkBoxEl.checked === true){
      liEl.remove();
    }else{
      alert("삭제할 항목을 선택해주세요");
    }
  })
})