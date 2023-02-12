//나머지 연산자
let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num % 2);

//거듭 제곱
console.log(2 ** 4);
console.log(Math.sqrt(4));

//연산자 줄여쓰기
let num2 = 5;
num2 = num2 + 5;

let num3 = 5;
num3 += 5;

console.log("연산자 줄여쓰기", num2, num3);

//증가 감소 연산자
let result1, result2;
let num4 = 10, num5 = 10;

result1 = num4++;
console.log(result1);

result2 = ++num5;
console.log(result2);

//비교연산자
let a = 5;
let b = '5';

console.log('비교연산자', a == b);
console.log('비교연산자', a === b);


