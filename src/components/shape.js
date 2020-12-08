// declare class

// export class using module.exports
class Shape {
  constructor() {
    this.color = "red";
    this.drawShape = function () {
      return "drawSHape";
    };
    this.calculateArea = function () {
      return "calArea";
    };
  }
}

module.exports = Shape;
