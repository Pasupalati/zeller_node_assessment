import { PricingRules } from '../services/pricingRules'; // Importing the interface
import { pricingRules } from '../services/pricingRules'; // Importing the actual data

export class Checkout {
  private items: Map<string, number>;
  private pricingRules: PricingRules;

  constructor(pricingRules: PricingRules) {
    this.items = new Map();
    this.pricingRules = pricingRules;
  }

  scan(item: string): void {
    const currentCount = this.items.get(item) || 0;
    this.items.set(item, currentCount + 1);
  }

  total(): number {
    let total = 0;
    for (const [item, count] of this.items) {
      const { price, rules } = this.pricingRules[item];
      if (rules) {
        total += rules(count) * price;
      } else {
        total += count * price;
      }
    }
    return total;
  }
}
