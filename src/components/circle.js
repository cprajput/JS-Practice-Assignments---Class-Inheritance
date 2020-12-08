// import using require

// declare class

// export class using module.exports
const Shape = require("./shape.js");

class Circle extends Shape {
  constructor() {
    super(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  calculateArea() {
    return "area";
  }
}
const c = new Circle();
module.exports = Circle;
