//if문
if(false){
  console.log('true입니다');
}else if(true){
  console.log('else if문 내부입니다');
}else{
  console.log('false입니다'); 
}

//조건비교
const age = 25;
if(age > 40){
  console.log('old');
}else if(age <= 40 && age >= 20){
  console.log('MZ');
}else{
  console.log('X');
}

//if문 중첩
let isOld = true;
let isRich = false;

if(isOld){
  if(isRich){
    console.log('ㅠㅠ');
  }else{
  console.log('b');
  }
}else{
  if(isRich){
    console.log('bb');
  }else{
    console.log('bbb');
  }
}

//NOT 연산자
let otherAge = 16;
let isAdult = otherAge > 19;

if(!isAdult){
  console.log('no');
}else{
  console.log('yes');
}

//다중비교
//여성이고, 이름이 jane이거나 성인이면 통과
let gender = 'M';
let name = 'Tom';
let isAdultTom = true;

if(gender === 'F' && name === 'Jane' || isAdultTom === true){
  console.log('통과');
}else{
  console.log('no');
}

if(gender === 'F' && (name === 'Jane' || isAdultTom === true)){
  console.log('통과');
}else{
  console.log('no');
}