class Car{
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
  // drive(){
  //   console.log(`${this.brand}의 ${this.color}색 자동차가 주행중`);
  // }
  showSpec(){
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중`);
  }
}

//클래스 상속
class ElecCar extends Car{
  constructor(brand, color, fuel){
    super(brand, color);
    this.fuel = fuel;
  }
  // showFuel(){
  //   console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직임`);
  // }
  // drive(){
  //   console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직임`);
  // }
  showSpec(){
    super.showSpec();
    console.log(`그리고 ${this.fuel}의 힘으로 움직임`);
  }
}
const hyundai = new Car('hyundai', 'blue');
// hyundai.drive();
hyundai.showSpec();

const tesla = new ElecCar('tesla', 'red', 'electricity');
// tesla.showFuel();
// tesla.drive();
tesla.showSpec();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);