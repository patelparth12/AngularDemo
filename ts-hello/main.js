"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
//
function doSomething() {
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
var count = 1;
// count = 'a';
var a;
a = 1;
a = true;
a = 'a';
var b;
b = 1;
// b = true;
// b = 'a';
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, 'a', true];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
//
// let abc = 'abc';
// let endsWithC =  abc.endsWith('c');
// let abcd;
// abcd = 'abcd';
// let endsWithD = (<string>abcd).endsWith('d');
// let endsWithD_2 = (abcd as string).endsWith('d');
//
var fn_log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
//let doLog = (message) => console.log(message);
//let doLog = () => console.log();
///
var drawPoint = function (x, y) {
    // ... Algorithm
};
var drawPoint1 = function (x, y, a, b, c, d) { };
var drawPoint2 = function (point) { };
drawPoint2({
    x: 1,
    y: 2
});
drawPoint2({
    name: "name"
});
var drawPoint3 = function (point) { };
var drawPoint4 = function (point) { };
drawPoint4({
    x: 1,
    y: 2
});
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    Point2.prototype.getDistance = function (another) {
        // ...
    };
    return Point2;
}());
// let point: Point2;
// point.draw();
var point2 = new Point2();
point2.x = 1;
point2.y = 2;
point2.draw();
/// Constructor
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    return Point3;
}());
var point3 = new Point3(1, 2);
point3.draw();
/// Access Modifiers
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    return Point4;
}());
var point4 = new Point4(1, 2);
point4.draw();
/// Access Modifiers in Constructor
var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    return Point5;
}());
var point5 = new Point5(1, 2);
point5.draw();
/// Properties
var Point6 = /** @class */ (function () {
    function Point6(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point6.prototype.draw = function () {
        console.log("X: " + this._x + " Y: " + this._y);
    };
    Object.defineProperty(Point6.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point6;
}());
var point6 = new Point6(1, 2);
var x = point6.x;
point6.x = 3;
point6.draw();
/// Modules
var point_1 = require("./point");
var point7 = new point_1.Point7(1, 2);
point7.draw();
