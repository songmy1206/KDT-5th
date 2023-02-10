//삼각형 넓이
function tri(num1, num2){
  return (num1 * num2) / 2;
}
console.log(tri(3,4));

//원의 넓이
function cir(num3 = 3){
  return (num3 ** 2) *3.14;
}
console.log(cir(5));

let cir2 = function(radius){
  return 3.14 * radius * radius;
}
console.log();

let cir2 = (radius = 3) => {
  return 3.14 * radius * radius;
}

//빗변
function pytha(num4, num5){
  return Math.sqrt(num4 ** 2 + num5 ** 2);
}
console.log(pytha(2,2));

let pytha = (num1, num2) => {
  return Math.sqrt(num4 ** 2 + num5 ** 2);
}