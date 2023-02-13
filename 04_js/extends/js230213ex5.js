class Shape{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{
  constructor(width, height){
    super(width, height);
  }
  getArea(){
    return this.width * this.height;
  }//overriding, 안써도 실행
}

class Triangle extends Shape{
  constructor(width, height){
    super(width, height);
  }
  getArea(){
    return this.width * this.height / 2;
  }
}

class Circle extends Shape{
  constructor(radius){
    super();//안가져와도 작성
    this.radius = radius;
  }
  getArea(){
    return 3.14 * this.radius * this.radius;
  }
}

const rec = new Rectangle(3, 4);
console.log(rec.getArea());

const tri = new Triangle(3, 4);
console.log(tri.getArea());

const cir = new Circle(5);
console.log(cir.getArea());

