// declare class

// export class using module.exports
class Shape {
  constructor(this) {
    this.color = "red";
    this.drawShape = this.drawShape.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  drawShape() {
    return "drawSHape";
  }
  calculateArea() {
    return "calArea";
  }
}
module.exports = Shape;
