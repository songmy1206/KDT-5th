const kdt = ['박지원', '김민정', '송민영', '이찬호'];
console.log(kdt);

kdt.push('smy');
console.log(kdt);

kdt.pop();
console.log(kdt);

kdt.unshift('smy');
console.log(kdt);

for(let i = 0; i < kdt.length; i++){
  console.log(kdt[i]);
}