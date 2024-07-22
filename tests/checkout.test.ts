import { expect } from 'chai';
import { Checkout } from '../src/utils/checkout';
import { pricingRules } from '../src/services/pricingRules';

describe('Checkout System', () => {
  it('should apply 3 for 2 deal on Apple TVs', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    const total = co.total();
    expect(total).to.equal(249.00);
  });

  it('should apply bulk discount on Super iPads', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    const total = co.total();
    expect(total).to.equal(2718.95);
  });
});
