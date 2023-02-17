const obj1 = {a:1, b:2};
const obj2 = {b:3, c:4};

const resultObj = Object.assign(obj1, obj2);

console.log('obj1', obj1);
console.log('obj2', obj2);
console.log('resultObj', resultObj);
console.log(obj1 === resultObj);
resultObj.a = 10;
console.log(obj1);

const smyObj = {
  name: "송민영",
  age: "25",
}
//const name = smyObj.name;
// const {name} = smyObj;
const{name: smyName, age} = smyObj;
console.log(smyName, age);
