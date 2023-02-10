//while 구구단
let i = 2;
let j = 1;
while(i<10){
  while(j<10){
    console.log(`${j}x${i}=${i * j}`);
    j++;
  }
  i++;
  j = 1;
}