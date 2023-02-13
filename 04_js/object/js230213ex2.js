const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  running: function(){
    console.log("뛰는중");
  },
  run(){
    console.log("뛰기");
  },
  cute(){
    console.log("뽀로로는 귀엽습니다!");
  }
}

/**
console.log(pororo.name);
console.log(pororo['age']);

pororo.gender = "M";
console.log(pororo);

pororo['height'] = "100";
console.log(pororo);

delete pororo.gender;
console.log(pororo);
*/

/** 
console.log('name' in pororo);
console.log('height' in pororo);
*/

/**
for(let key in pororo){
  console.log(key);
  console.log("pororo.key", pororo.key);
  console.log("pororo[key]", pororo[key]);
}
*/


/////////////////////////////////////////////////
// for(let key in pororo){
//   console.log(`key 는 ${key}, key 안의 값은 ${pororo[key]}`);
// }

/////////////////////////////////////////////////
pororo.running();
pororo.run();

/////////////////////////////////////////////////
pororo.cute();