//문자열
const str = "Hello, World";

//문자열 길이
console.log(str.length);

//특정 문자열 찾기 - index 0부터
console.log(str.indexOf("World"));

//문자열 자르기
console.log(str.slice(0,5));
console.log(str.slice(0, str.indexOf("World")));

//문자열 바꾸기
console.log(str.replace("World", "Pororo"));
console.log(str);

//문자열 반복
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr); 

//공백 제거
const str3 = "               Hello, World        ";
console.log(str3.trim());

//수박수박수박수박수박수?
function solution(n){
  const answer = "";
  const wm = "수박";
  for(let i = 1; i <= n; i++){
    if(i % 2 === 1){
      answer += "수";
    }else{
      answer += "박";
    }
  }
  return answer;
} 
console.log(solution(3));


