/**
 * module returns a polygon
 * size: 10
 * type 'square or triangle'
 * 
 * Area=(sqrt(3)/4)(a*a) for triangle (assume equlateral)
 * Area = a*a for square
 * 
 */
var polygonModule = function ()
{
    
    let self = this;
/////////////////////////////////////
    class Polygon {

    constructor(length) {
        this.side =length; 
    }

    length()
    {
        return this.side;
    }

    }

    class Square extends Polygon
    {
        
       constructor(length) {super(length) } 
        
        
        get name()
        {
        return 'Square';
        }

        get area()
        {
        return this.side * this.side;
        }


    }

    class Triangle extends Polygon
    {
        constructor(length) {super(length) } 
        get name()
        {
        return 'Equilateral Triangle';
        }

        get area()
        {
        return 42;
        }
    }
 
 
    self.create = function(size,type)
    {
        return new Square(size);
    }

 

}// end function polygonModule
module.exports = polygonModule;

