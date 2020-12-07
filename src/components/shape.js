// declare class

// export class using module.exports
class Shape {
    constructor(this){
        this.color = "red";
        this.drawShape = this.drawShape.bind();
        this.calculateArea = this.calculateArea.bind();
        
    }
    drawShape(){
            return "drawSHape";
        }
   calculateArea{
             return "calArea";
        }
    
}
module.exports = Shape;
