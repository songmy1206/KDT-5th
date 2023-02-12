//while문 기본 -- 무한루프 주의해서 사용
let index1 = 0;

while(index1 < 10){
  console.log(`인사를 ${index1 + 1}번째 드립니다 🎅`);
  index1++;
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
let index3 = 0;
do{
  console.log(`do-while 인덱스는 ${index3}입니다`);
  index3++;
}while(index3 > 10) 
//최소 한 번 실행
