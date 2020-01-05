class ShippingCost {
  basePrice: number;
  MINIMUM_FOR_FREE = 3000
  COST = 500
  constructor(basePrice: number){
    this.basePrice = basePrice
  }

  amount(): number {
    if(this.basePrice < this.MINIMUM_FOR_FREE) return this.COST
    return 0
  }
}

const ABOVE_THRESHOLD: number = 5000
const BELOW_THRESHOLD: number = 300

const above_threshold_cost: ShippingCost = new ShippingCost(ABOVE_THRESHOLD)
console.log(above_threshold_cost.amount())

const below_threshold_cost: ShippingCost = new ShippingCost(BELOW_THRESHOLD)
console.log(below_threshold_cost.amount())