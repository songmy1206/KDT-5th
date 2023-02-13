const smy = {
  name: "송민영",
  email: "songmy1206@gmail.com"
}

const 송민영 = {
  name: "송민영",
  email: "songmy1206@gmail.com"
}

console.log(smy === 송민영);

const smyCopy = smy;
smyCopy.name = "smy";

console.log(smy);
console.log(smyCopy);
console.log(smy === smyCopy);