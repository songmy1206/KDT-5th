//while문 기본
let index = 0;

while(index < 10){
  console.log(`인사를 ${index + 1}번째 드립니다 🎅`);
  index++;
}

let index2 = 0;

while(true){//무한
  console.log(`인사를 ${index2 + 1}번째 드립니다 🎃`);
  index2++;
  if(index2 > 9){
    break;
  }
}

//do-while 비교
let index1 = 0;
do{
  console.log(`do-while 인덱스는 ${index1}입니다`);
  index1++;
}while(index1 > 10)
