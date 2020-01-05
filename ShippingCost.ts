class ShippingCost {
  readonly basePrice: number;
  readonly MINIMUM_FOR_FREE = 3000
  readonly COST = 500
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
// -> 0
// 3000円以上の注文なので送料0円

const below_threshold_cost: ShippingCost = new ShippingCost(BELOW_THRESHOLD)
console.log(below_threshold_cost.amount())
// -> 500
// 3000円未満の注文なので送料500円