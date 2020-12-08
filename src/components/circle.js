// import using require

// declare class

// export class using module.exports
const Shape = require("./shape.js");

class Circle extends Shape {
  constructor(this) {
    super(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  calculateArea() {
    return "area";
  }
}
module.exports = Circle;
