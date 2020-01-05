var Quantity = /** @class */ (function () {
    function Quantity(quantity) {
        this.MIN = 1;
        this.MAX = 100;
        if (quantity < this.MIN)
            throw new RangeError("不正:" + this.MIN + "未満");
        if (quantity > this.MAX)
            throw new RangeError("不正:" + this.MAX + "超過");
        this.quantity = quantity;
    }
    Quantity.prototype.canAdd = function (quantity) {
        var added = this.addValue(quantity);
        return added <= this.MAX;
    };
    Quantity.prototype.add = function (quantity) {
        if (!this.canAdd(quantity))
            throw new RangeError("不正:合計が" + this.MAX + "超過");
        var added = this.addValue(quantity);
        return new Quantity(added);
    };
    Quantity.prototype.addValue = function (quantity) {
        return this.quantity + quantity.quantity;
    };
    return Quantity;
}());
var addedQuantity = new Quantity(40);
console.log(addedQuantity.quantity);
var below = new Quantity(50);
console.log(addedQuantity.canAdd(below));
var above = new Quantity(90);
console.log(addedQuantity.canAdd(above));
// not added, because readonly property
// below.quantity += 100
addedQuantity.add(below);
console.log(addedQuantity.quantity);
