
function log(message){
    console.log(message);
}

var message = "Hello World";

log(message);

//

function doSomething(){
    for (var i = 0; i < 5; i++) {   
        console.log(i);
    }

    console.log("Finally " + i);
}

doSomething();

// function doSomething1(){
//     for (let i = 0; i < 5; i++) {   
//         console.log(i);
//     }

//     console.log("Finally " + i);
// }

// doSomething1();

//

let count = 1;
// count = 'a';

let a;
a = 1;
a = true;
a = 'a';

let b: number;
b = 1;
// b = true;
// b = 'a';

let c: boolean;
let d: string;
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = [1, 'a', true];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 }
let backgroundColor = Color.Red;

//

// let abc = 'abc';
// let endsWithC =  abc.endsWith('c');

// let abcd;
// abcd = 'abcd';
// let endsWithD = (<string>abcd).endsWith('d');
// let endsWithD_2 = (abcd as string).endsWith('d');


//

let fn_log = function(message){
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

//let doLog = (message) => console.log(message);
//let doLog = () => console.log();

///

let drawPoint = (x, y) => {
    // ... Algorithm
}

let drawPoint1 = (x, y, a, b, c, d) => { }

let drawPoint2 = (point) => { }

drawPoint2({
    x: 1,
    y: 2
});

drawPoint2({
    name: "name"
});

let drawPoint3 = (point: {x: number, y: number}) => { }

interface Point{
    x: number,
    y: number
}

let drawPoint4 = (point: Point) => { }

drawPoint4({
    x: 1,
    y: 2
});

////

//Cohesion Princeiple --- property and fns which are highly related are part of one unit
/// Class --- groups variables and fns which are highly related

interface Point1{
    x: number,
    y: number,
    draw: () => void
}

class Point2{
    x: number;
    y: number;
    
    draw(){
        console.log("X: " + this.x + " Y: " + this.y);
    }

    getDistance(another: Point2){
        // ...
    }
}

// let point: Point2;
// point.draw();
let point2 = new Point2();
point2.x = 1;
point2.y = 2;
point2.draw();

/// Constructor

class Point3{
    x: number;
    y: number;
    
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log("X: " + this.x + " Y: " + this.y);
    }
}

let point3 = new Point3(1, 2);
point3.draw();

/// Access Modifiers

class Point4{
    private x: number;
    private y: number;
    
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log("X: " + this.x + " Y: " + this.y);
    }
}

let point4 = new Point4(1, 2);
point4.draw();

/// Access Modifiers in Constructor

class Point5{
    constructor(private x?: number, private y?: number){
    }

    draw(){
        console.log("X: " + this.x + " Y: " + this.y);
    }
}

let point5 = new Point5(1, 2);
point5.draw();

/// Properties

class Point6{
    constructor(private _x?: number, private _y?: number){
    }

    draw(){
        console.log("X: " + this._x + " Y: " + this._y);
    }

    get x(){
        return this._x;
    }

    set x(value){
        if(value < 0)
            throw Error('value cannot be less than 0.');

        this._x = value;
    }
}

let point6 = new Point6(1, 2);
let x = point6.x;
point6.x = 3;
point6.draw();

/// Modules

import { Point7 } from './point'

let point7 = new Point7(1, 2);
point7.draw();
