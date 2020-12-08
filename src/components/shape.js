// declare class

// export class using module.exports
class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    return "drawSHape";
  }
  calculateArea() {
    return "calArea";
  }
}

module.exports = Shape;
