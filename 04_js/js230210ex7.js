//삼각형 넓이
function tri(num1, num2){
  return (num1 * num2) / 2;
}
console.log(tri(3,4));

let tri2 = (num1, num2) => {
  return (num1 * num2) / 2;
}
console.log(tri2(5,6));

//원의 넓이
//기본
function cir(num3 = 3){
  return (num3 ** 2) *3.14;
}
console.log(cir(5));

//함수 표현식
let cir2 = function(radius){
  return 3.14 * radius * radius;
}
console.log(cir2(5));

//화살표 함수
let cir3 = (radius = 5) => {
  return 3.14 * radius * radius;
}
console.log(cir3());

//빗변
function pytha(num4, num5){
  return Math.sqrt(num4 ** 2 + num5 ** 2);
}
console.log(pytha(2,2));

let pytha2 = (num6, num7) => {
  return Math.sqrt(num6 ** 2 + num7 ** 2);
}
console.log(pytha2(2,2));