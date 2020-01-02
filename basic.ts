
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
import {module} from './basic2'//here "module" is class name and "basic2" is file name. (.) refers "basic2" and "basic" both are in same folder
class points {
    /*//no need to mention instance variable here if you use access modifier in constructor parameter.
    private x:number;//using access modifiers
    private y:number;
*/ 
    constructor(private _x?:number, private _y?:number)//you cannot make multiple constructor in typescript unlike java.
    {//optional(?)means you can either pass or not pass parameter on the constructor.
        //if you use optional for one parameter,the other parameters must be optional too.
        //here underscore(_) is used to implement camel casing notation.This was we can use small x and small y in get and sex method.
        /*//no need to initialize variables if you use access modifer in constructor parameter because it does initialization of variable automatically.
        this.x=x;
        this.y=y;*/
    }

   draw() {
        console.log('x: '+ this.x+ " " +'y:'+ this.y);
        //add logic
    }

    getX ()//getter method
    {
        return this.x;
    }
    get x()//now x is a property rather than get method.use get key word to define a property.
    {
        return this.x;
    }

    setX (value)
    {//setter method

        if(value<0)
        {
         throw new Error("value cannot be less than zero");
        }

        this.x=value;
}

set x (value)
    {//setter method

        if(value<0)
        {
         throw new Error("value cannot be less than zero");
        }

        this.x=value;
}
    getdistance(another:points)//function name is getdistance and parameter type is points and name of parameter is another
    {
        //logic
    }


}

let point= new points(1,2);
point.setX(10);//setting a value with using a method.
point.x=10;//setting a property value without using a method but using a property.no need to put point._X to access the x variable but instead you can use point.x. 
point.getX;// using getter method which returns this.x
point.x;//using x property which returns this.x
point.draw();

let mod= new module();
mod.print();//creating a object from module class presented in basic2.ts by importing the file.
