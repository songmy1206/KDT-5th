let nums = [-1, 23, 13, 14.52, -33.53, 30];

let min = Math.min(...nums);
let max = Math.max(...nums);

console.log(Math.floor(min));
console.log(Math.floor(max));

let sum = 0;
for(let i = 0; i < nums.length; i++){
  sum += Math.abs(nums[i]);
}
console.log(sum / nums.length);

let random = Math.floor(Math.random() * 100);
console.log(random);

//약수의 합
function solution(n) {
  let answer = 0;
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      answer += i;
    }
  }
  return answer;
}
console.log(solution(12));