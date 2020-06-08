"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discount_1 = require("./discount");
var Store = /** @class */ (function () {
    function Store(discount) {
        this.totalValue = 0;
        this.discount = discount;
    }
    Store.prototype.setTotalValue = function (total) {
        this.totalValue = total;
    };
    Store.prototype.getTotalWithDiscount = function () {
        return this.totalValue - this.discount.calculateDiscount(this.totalValue);
    };
    return Store;
}());
var simpleDiscount = new discount_1.SimpleDiscount();
var specialDiscount = new discount_1.SpecialDiscount();
var store = new Store(specialDiscount);
store.setTotalValue(100);
console.log(store.getTotalWithDiscount());
