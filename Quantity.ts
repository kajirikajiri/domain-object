class Quantity {
  readonly MIN: number = 1
  readonly MAX: number = 100
  readonly quantity: number
  
  constructor(quantity: number) {
    if(quantity < this.MIN) throw new RangeError("不正:" + this.MIN + "未満")
    if(quantity > this.MAX) throw new RangeError("不正:" + this.MAX + "超過")
    this.quantity = quantity
  }

  canAdd(quantity: Quantity) {
    const added: number = this.addValue(quantity)
    return added <= this.MAX
  }

  add(quantity: Quantity) {
    if(!this.canAdd(quantity)) throw new RangeError("不正:合計が" + this.MAX + "超過")
    const added: number = this.addValue(quantity)
    return new Quantity(added)
  }

  private addValue(quantity: Quantity){
    return this.quantity + quantity.quantity
  }
}

const addedQuantity: Quantity = new Quantity(40)
console.log(addedQuantity.quantity)
let below: Quantity = new Quantity(50)
console.log(addedQuantity.canAdd(below))
// -> true
let above: Quantity = new Quantity(90)
console.log(addedQuantity.canAdd(above))
// -> false
// not added, because readonly property
// below.quantity += 100
addedQuantity.add(below)
// readonlyにしたので変更されない
console.log(addedQuantity.quantity)
// -> 40