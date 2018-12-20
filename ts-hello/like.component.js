"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isLiked) {
        this._likesCount = _likesCount;
        this._isLiked = _isLiked;
    }
    LikeComponent.prototype.onClick = function () {
        this._likesCount += this._isLiked ? -1 : 1;
        this._isLiked = !this._isLiked;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isLiked", {
        get: function () {
            return this._isLiked;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
