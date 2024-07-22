export interface PricingRules {
    [sku: string]: {
      price: number;
      rules?: (count: number) => number; // Optional function to apply rules
    };
  }
  
  export const pricingRules: PricingRules = {
    ipd: {
      price: 499.99,
      rules: (count) => Math.floor(count / 5) * 4 + (count % 5),
    },
    mbp: {
      price: 1399.99,
    },
    atv: {
      price: 109.50,
      rules: (count) => Math.floor(count / 3) * 2 + (count % 3),
    },
    vga: {
      price: 30.00,
    },
  };
  