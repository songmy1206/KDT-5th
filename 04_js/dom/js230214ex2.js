const orangeEl = document.querySelector(".orange");
console.log(orangeEl);

const skyblueEl = document.getElementById("skyblue");
console.log(skyblueEl);

const listEl = document.querySelector("ul>li:nth-child(2)");
listEl.classList.add("orange");
console.log(listEl);

const firstOrangeEl = document.querySelector(".orange:first-child");

if(firstOrangeEl.classList.contains("orange") === true ){
  firstOrangeEl.classList.remove("orange");
}