// import using require

// declare class

// export class using module.exports
const Shape = require("./shape.js");

class Circle extends Shape {
  constructor() {
    super(this);
    this.calculateArea = function () {
      return "area";
    };
  }
}

module.exports = Circle;
