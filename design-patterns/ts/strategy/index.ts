import { Discount, SimpleDiscount, SpecialDiscount } from "./discount";

class Store {
  totalValue: number = 0;
  discount: Discount;

  constructor(discount: Discount) {
    this.discount = discount;
  }

  setTotalValue(total: number) {
    this.totalValue = total;
  }

  getTotalWithDiscount(): number {
    return this.totalValue - this.discount.calculateDiscount(this.totalValue);
  }
}


const simpleDiscount: Discount = new SimpleDiscount();
const specialDiscount: Discount = new SpecialDiscount();

const store: Store = new Store(specialDiscount);

store.setTotalValue(100);

console.log(store.getTotalWithDiscount());
