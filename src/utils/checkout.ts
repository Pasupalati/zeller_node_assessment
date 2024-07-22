import { Product, products } from '../models/product';
import { PricingRule } from '../services/pricingRules';

export class Checkout {
  private items: Product[] = [];
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  scan(sku: string): void {
    const product = products.find(p => p.sku === sku);
    if (product) {
      this.items.push(product);
    }
  }

  total(): number {
    let total = 0;
    for (const rule of this.pricingRules) {
      total += rule.apply(this.items);
    }
    return total;
  }
}
