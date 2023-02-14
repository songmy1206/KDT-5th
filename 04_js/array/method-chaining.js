// --> Hello / .split: 문자를 인수 기준으로 쪼개서 배열로 반환
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

// .reverse: 배열의 순서를 뒤집어서 반환
let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

// .join: 배열을 인수 기준으로 문자로 병합해서 반환
let helloStr = helloTestArr.join("");
console.log(helloStr);

let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ['a', 'b', 'c'],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
// let testStr = obj.number.reverse().join(""); 숫자는 reverse X
// let testStr = obj.str.reverse().join(""); undefined X
// let testStr = obj.str?.reverse().join(""); 

console.log(testStr);