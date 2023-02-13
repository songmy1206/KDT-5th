//생성자 함수 버전
function mzhCar(brand, color){
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 차가 주행중`);
  }
}

const hyundai = new Car('hyundai', 'white');

console.log(hyundai);
hyundai.drive();

//클래스 버전
class ClassCar{
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
  drive(){
    console.log(`${this.brand}의 ${this.color}색 차가 주행중`);
  }
}


const porsche = new ClassCar('porsche', 'black');
console.log(porsche);
