// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const select = document.querySelector("#content");

// 클릭 된 요소를 저장하기 위한 전역 변수 (td)
let targetEl;

/** 
calendar.addEventListener("click", function(e){
  if (e.target.tagName === "P" || e.target.tagName === "TD") {
    targetEl = e.target;
    date.value = "2023년 2월" + targetEl.innerText + "일";
  }else if(e.target.tagName === "DIV"){
    e.target.remove();
  }
})

function writeSchedule(){
  const div = document.createElement("div");
  div.innerHTML = select.value;
  targetEl.parentNode.append(div);
  select.value = "";
}*/

/***/
function calendarTask(e){
  if(e.target.tagName === "P"){
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  }else if(e.target.tagName === "TD"){
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  }else if(e.target.tagName === "DIV"){
    e.target.remove();
  }
}

function writeSchedule(){
  if(select.value === "" && date.value === ""){
    select.setAttribute("placeholder", "내용을 입력하세요");
    date.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }else if(select.value === ""){
    select.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }else if(date.value === ""){
    date.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }

  const div = document.createElement("div");
  div.textContent = select.value;
  // div.addEventListener("click", function(e){
  //   div.remove();
  // })
  targetEl.append(div);
  select.value = "";
}

calendar.addEventListener("click", calendarTask); 