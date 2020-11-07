// declare class

// export class using module.exports
class Shape {
    constructor(){
        this.color = "red";
        this.drawShape  = ()=>{
            return "drawSHape";
        }
   this.calculateArea=()=>{
             return "calArea";
        }
        
    }
    
}
module.exports = Shape;
