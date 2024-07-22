import { expect } from 'chai';
import { Checkout } from '../utils/checkout';
import { pricingRules } from '../services/pricingRules';

describe('Checkout', () => {
  let checkout: Checkout;

  beforeEach(() => {
    checkout = new Checkout(pricingRules);
  });

  it('should correctly calculate the total for a set of items', () => {
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('vga');
    expect(checkout.total()).to.equal(249.00);
  });

  it('should correctly apply bulk discount for iPads', () => {
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    expect(checkout.total()).to.equal(2718.95);
  });
});
