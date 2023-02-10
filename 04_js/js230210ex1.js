//club

// let isAdult = true;
// let VIP = false;
// let isDrunken = true;
// let money = true;

// if(((isAdult || VIP) && isDrunken) || money ){
//   console.log('통과');
// }else{
//   console.log('no');
// }

const smy = {
  isAdult: true,
  VIP: false,
  isDrunken: true,
  money: false,
};

if(((smy.isAdult || smy.VIP) && smy.isDrunken) || smy.money){
  console.log('yes');
}else{
  console.log('no');
}

