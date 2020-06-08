export interface Discount {
  calculateDiscount(total: number): number;
}

export class SimpleDiscount implements Discount {
  // 10% discount
  discountInPercentage: number = 10;

  calculateDiscount(total: number): number {
    return total * this.discountInPercentage / 100;
  }
}

export class SpecialDiscount implements Discount {
  // 25% discount
  discountInPercentage: number = 25;

  calculateDiscount(total: number): number {
    return total * this.discountInPercentage / 100;
  }
}
