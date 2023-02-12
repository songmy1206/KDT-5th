let sum = 0;

for(let i = 1; i <= 1000; i++){
  if(i % 2 === 1){
    continue;
  }else{
    sum += i;
  }
}console.log(sum);

let sum2 = 0;

for(let i = 1; i <= 1000; i++){
  if(i % 2 === 1) continue;
  sum2 += i;
}console.log(sum2);