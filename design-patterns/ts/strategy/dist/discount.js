"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialDiscount = exports.SimpleDiscount = void 0;
var SimpleDiscount = /** @class */ (function () {
    function SimpleDiscount() {
        // 10% discount
        this.discountInPercentage = 10;
    }
    SimpleDiscount.prototype.calculateDiscount = function (total) {
        return total * this.discountInPercentage / 100;
    };
    return SimpleDiscount;
}());
exports.SimpleDiscount = SimpleDiscount;
var SpecialDiscount = /** @class */ (function () {
    function SpecialDiscount() {
        // 25% discount
        this.discountInPercentage = 25;
    }
    SpecialDiscount.prototype.calculateDiscount = function (total) {
        return total * this.discountInPercentage / 100;
    };
    return SpecialDiscount;
}());
exports.SpecialDiscount = SpecialDiscount;
