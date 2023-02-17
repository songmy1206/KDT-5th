let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const sameArr = fruits1.map(item => fruits2.includes(item))

const differArr = fruits1.filter(item => !fruits2.includes(item))

console.log(sameArr);
console.log(differArr);

