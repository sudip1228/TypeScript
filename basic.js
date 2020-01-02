//typescript is a superset of javascript
/*
let a:number;//now you can have the valuje of "a " as number only
//a=true;
a=1;

//following is the way to initializevar in typescript
let b:boolean;
let c: number[];
let d: any;
let e: any[];

//you can create a enum in typscript similar to java but in Javascript it is complex
let message= 'abc';
let endswithc=(<String>message).endsWith('c');//known as type assertion and similar  to typecasting
let alternativeway=(message as String).endsWith('c');//alternative way

//defining functions

let dialog=()=>
{
    console.log()
};//same as lamda expression

//alternative way

let log=()=> console.log();


//here drawpoint is function name. point is a object which consist x and y as a properties or parameter of type number
let drawpoint = (point: {x:number, y:number})=>{//using a lamda expression like  things here

}
drawpoint ({
x:1,
y:2

})

//interface

interface point {
    x:number,
    y:number,
    draw: () => void//declaring function in interface.Here, draw is function name which has no parameter and returns void(nothing).
}
//alternative way

drawpoint = (point: point)=>{//passing a interface. here interface is type

}

drawpoint ({//drawpoint consists of two properties x and y
x:1,
y:2

})
*/
//class
var points = /** @class */ (function () {
    function points(x, y) {
        this.x = x;
        this.y = y;
    }
    points.prototype.draw = function () {
        console.log('x: ' + this.x + " " + 'y:' + this.y);
        //add logic
    };
    points.prototype.getdistance = function (another) {
        //logic
    };
    return points;
}());
var point = new points(1, 2);
point.draw();
