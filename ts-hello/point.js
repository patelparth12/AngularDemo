"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point7 = /** @class */ (function () {
    function Point7(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point7.prototype.draw = function () {
        console.log("X: " + this._x + " Y: " + this._y);
    };
    return Point7;
}());
exports.Point7 = Point7;
