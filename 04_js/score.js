/** let userInput = prompt("값을 입력하세요");
console.log(userInput);
let mathScore = prompt("수학점수를 입력하세요");
let engScore = prompt("영어점수를 입력하세요");
let avg = (mathScore + engScore) / 2; */ 

let mathScoreStr = prompt("수학점수를 입력하세요");
let engScoreStr = prompt("영어점수를 입력하세요");

let Num1 = Number(mathScoreStr);
let Num2 = Number(engScoreStr);

let avgScore = (Num1 + Num2) / 2;

console.log(avgScore);

