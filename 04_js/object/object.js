const smy = {
  name: '송민영',
  age: 25,
}

//접근
console.log(smy.name);
console.log(smy['age']);

//추가
smy.gender = 'F';
console.log(smy);

smy[/**키 - 문자열 */'hairColor'] = "black";
console.log(smy);

//삭제
delete smy.hairColor;
console.log(smy);

delete smy['gender'];
console.log(smy);


////////////////////////////////////////////
//this
const user = {
  name: "송민영",
  sayHello: function(){
    console.log(`안녕하세요. ${this.name}님`);
  }
};
user.sayHello();

function sayHello(){
  console.log(`Hello, I'm ${this.name}`);
}

const boy = {
  name: "Mike",
  sayHello
}
const girl = {
  name: "Jane",
  sayHello
}

boy.sayHello();
girl.sayHello();
sayHello();