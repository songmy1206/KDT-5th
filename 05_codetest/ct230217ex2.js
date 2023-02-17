const arr = [];

for(let i = 1; i <= 100; i++){
  arr.push(i);
}
let sum = 0;
const mapArr =arr.map((item) => sum += item)
//리턴 써줘야 배열로 출력 가능
console.log(sum);
console.log(mapArr);


const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "TMT",
}

for(item in obj){
  console.log(obj[item]);
}

const str = "apple";
//배열일때만 of 가능
for(letter of str){
  console.log(letter);
}