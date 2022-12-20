
/*
class AreaCalculator {
  // ...
 
  static calculate(parameter){
    let area=0;
   if(parameter===square){
    parameter=square.side;
    area=parameter*parameter;
   }
   else if(parameter===rectangle){
    let parameter1=rectangle.width;
    let parameter2=rectangle.height;
    area=parameter1*parameter2;
   }
   else if(parameter===circle){
    parameter=circle.radius;
    area=Math.PI*parameter*parameter;
}
return area;
}
}*/
class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
 class AreaCalculator{ 

  static calculate(geometricType) {
    if(geometricType instanceof Square){
      return square.side*square.side;
    }
    else if(geometricType instanceof Rectangle){
      return geometricType.width*geometricType.height;
    }
    else if(geometricType instanceof Circle){
      return Math.round(Math.PI*geometricType.radius*geometricType.radius);
    }
  }

}
const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

//console.log(square);
console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));