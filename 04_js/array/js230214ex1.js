const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
// const result1 = kdtCurriculum[0].split("").reverse().join("");
// const result2 = kdtCurriculum[4].split("").reverse().join(""); 
const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join(""); 
console.log(result1);
console.log(result2);

