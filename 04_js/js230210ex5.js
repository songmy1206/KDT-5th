//while 구구단
let i = 2;
let j = 1;
while(i<10){
  console.log(`${i}단`);
  while(j<10){
    console.log(`${i}x${j}=${i * j}`);
    j++;
  }
  i++;
  j = 1;
}