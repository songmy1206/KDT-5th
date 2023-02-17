const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];
// const fruitsObjArr = fruits.map(function(item, index, origin){
//   console.log("item", item);
//   console.log("index", index);
//   console.log("origin", origin);
// });

// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
//   console.log(i);
//   console.log(fruits);
// }

const fruitsObjArr = fruits.map(function(item, index, origin){
  return{
    id: index,
    name: item,
  }
})
console.log(fruits);
console.log(fruitsObjArr);

//화살표함수로 변경
const fruitsObjArr2 = fruits.map((item, index) => {return{id: index, name: item,}})



const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map(function(item, index){
  return item / 3;
}) 
console.log(divideArr);

const nums2 = [1, 2, 3, 4, 5, 6];
const multipleArr = nums2.map((item, index) => item * 4)
//중괄호 안에 return값 하나만 존재해서 축약 가능
console.log(multipleArr);

const numbers2 = [1, 2, 3, 4, 5, 6];
//const number2 = "123456".split("")
const filterArr = numbers2.filter((item, index, og) => item > 3)
console.log(filterArr);

const words = ['spray', 'limit', 'elite', 'exiberant', 'destruction', 'present']
const resultArr = words.filter((item) => item.length > 6)
console.log(resultArr);

const numbers4 = [1, 2, 3, 4, 5, 6];
console.log(numbers4.includes(3));
console.log(numbers4.includes(7));

//return이 true일때만 넘기는게 filter, 다 넘기는게 map

const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  return /^A/.test(item); //item에 A가 포함되면 true 포함되지않으면 false
})
const findIndexResult = fruits3.findIndex(item => /^B/.test(item))
console.log(findResult);
console.log(findIndexResult);

const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function(acc, item, index, og){
  return acc += item;
}, 0);
console.log(sumResult);

const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce((acc, item) => {
  if(item < 0){
    acc[0] += 1;
  }else{
    acc[2] += 1;
  }
  return acc;
}, [0, 0]);

console.log(result);
