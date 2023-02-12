for(let i = 0; i < 20; i++){
  if(i % 2 === 1){
    continue;
  }else{
    console.log(`${i}번 입니다`);
  }
  if(i === 10) break;
}

for(let i = 0; i < 20; i++){
  if(i % 2 === 1) continue;
  console.log(`${i}번 입니다`);
}