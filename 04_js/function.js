function helloFunc(){
  console.log('hello');
}

let str = helloFunc();
console.log(str);

function returnFunc(){
  console.log('Return');
  return 'return';
}

let str1 = returnFunc();
console.log(str1);

//익명함수 - 선언하고 불러야 오류 안남
let noNameFunc = function(){
  console.log('No Name');
  return 'no name';
}

let str2 = noNameFunc();
console.log(str2);

//default
function sayHello(name = 'Minyoung'){
  console.log(`Hello~ ${name}`);
}
sayHello();

function sum(num1, num2){
  return num1 + num2;
}
console.log(sum(1,2));

function squre(num){
  return num ** 2;
}
console.log(squre(30));