//day
/**console.log(Date.parse(new Date())); 
- 기준? 얼마나 지났는지 (초단위) */
/**console.log(new Date().getDay());
- 요일에 맞는 숫자 (ex. 0 = 일요일) */

let day = new Date().getDay();

if(day === 0){
  alert('일요일');
}else if(day === 1){
  alert('월요일');
}else if(day === 2){
  alert('화요일');
}else if(day === 3){
  alert('수요일');
}else if(day === 4){
  alert('목요일');
}else if(day === 5){
  alert('금요일');
}else{
  alert('토요일');
}

if(day === 0) alert('일요일');
else if(day === 1) alert('월요일');
else if(day === 2) alert('화요일');
else if(day === 3) alert('수요일');
else if(day === 4) alert('목요일');
else if(day === 5) alert('금요일');
else alert('토요일');

//switch
let day2;

switch(new Date().getDay()){
  case 0:
    day2 = '일요일';
    break;
  case 1:
    day2 = '월요일';
    break;
  case 2:
    day2 = '화요일';
    break;
  case 3:
    day2 = '수요일';
    break;
  case 4:
    day2 = '목요일';
    break;
  case 5:
    day2 = '금요일';
    break;
  case 6:
    day2 = '토요일';
    break;
}
console.log(day2);
