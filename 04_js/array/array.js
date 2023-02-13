const kdt = ['박지원', '김민정', '송민영', '이찬호'];
console.log(kdt[2]);

//요소 변경
kdt[2] = 'smy'

console.log(kdt[2]);
console.log(kdt.length);

//추가
kdt.push('name');
console.log(kdt.push('name'));
console.log(kdt);

//끝 요소 제거
kdt.pop();
console.log(kdt.pop());
console.log(kdt);

//앞 추가
kdt.unshift('noname');
console.log(kdt.unshift('noname'));
console.log(kdt);

//앞 제거
kdt.shift();
console.log(kdt.shift());
console.log(kdt);

//반복
for(let i = 0; i < kdt.length; i++){
  console.log(kdt[i]);
}