function  Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.show = function(){
    console.log(`이름은 ${this.name}, 성별은 ${this.gender}`);
  }
}

let user1 = new Kdt('박지원', 'M');
let user2 = new Kdt('김민정', 'F');
let user3 = new Kdt('송민영', 'F');
let user4 = new Kdt('이찬호', 'M');

user1.show();
user2.show();
user3.show();
user4.show();