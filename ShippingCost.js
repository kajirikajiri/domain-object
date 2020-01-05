var ShippingCost = /** @class */ (function () {
    function ShippingCost(basePrice) {
        this.MINIMUM_FOR_FREE = 3000;
        this.COST = 500;
        this.basePrice = basePrice;
    }
    ShippingCost.prototype.amount = function () {
        if (this.basePrice < this.MINIMUM_FOR_FREE)
            return this.COST;
        return 0;
    };
    return ShippingCost;
}());
var ABOVE_THRESHOLD = 5000;
var BELOW_THRESHOLD = 300;
var above = new ShippingCost(ABOVE_THRESHOLD);
console.log(above.amount());
var below = new ShippingCost(BELOW_THRESHOLD);
console.log(below.amount());
