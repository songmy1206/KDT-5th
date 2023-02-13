function Kdt(name, gender){
  this.name = name;
  this.gender = gender;
  this.sayName = function(){
    console.log(this.name);
  }
}

let user1 = new Kdt('smy','F');
let user2 = new Kdt('aaa','M');
let user3 = new Kdt('bbb','F');
let user4 = new Kdt('ccc','M');
let user5 = new Kdt('ddd','F');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

let user6 = new Kdt('eee', 'M');
user6.sayName();

user1.sayName();
user2.sayName();
user3.sayName();
user4.sayName();
user5.sayName();