import { Product } from '../models/product';

export interface PricingRule {
  apply: (items: Product[]) => number;
}

export class AppleTvPricingRule implements PricingRule {
  apply(items: Product[]): number {
    const atvItems = items.filter(item => item.sku === 'atv');
    const atvCount = atvItems.length;
    const discountedCount = Math.floor(atvCount / 3) * 2 + (atvCount % 3);
    const pricePerUnit = atvItems[0]?.price || 0;
    return discountedCount * pricePerUnit;
  }
}

export class IpadPricingRule implements PricingRule {
  apply(items: Product[]): number {
    const ipdItems = items.filter(item => item.sku === 'ipd');
    const ipdCount = ipdItems.length;
    const pricePerUnit = ipdItems[0]?.price || 0;
    if (ipdCount > 4) {
      return ipdCount * 499.99;
    }
    return ipdCount * pricePerUnit;
  }
}

export const pricingRules: PricingRule[] = [
  new AppleTvPricingRule(),
  new IpadPricingRule(),
];
