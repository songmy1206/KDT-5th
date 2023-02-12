let str = "124";
console.log(typeof str);
console.log(str / 2);

let num = Number(str);
console.log(typeof num);
console.log(num / 2);

console.log(Number('abcd'));

let num2 = 123;
let num3 = 456;

let str1 = String(num2);
let str2 = String(num3);

console.log(str1 + str2);

console.log(1, Boolean(1));
console.log("송민영", Boolean("송민영"));
console.log(-1, Boolean(-1));
console.log(0, Boolean(0));
console.log("", Boolean(""));
console.log(" ", Boolean(" "));
console.log("undefined", Boolean(undefined));
console.log("null", Boolean(null));
console.log("NaN", Boolean(NaN));