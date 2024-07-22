import { Request, Response } from 'express';
import { Checkout } from '../utils/checkout';
import { pricingRules } from '../services/pricingRules';

// Initialize the checkout instance with the pricing rules
const checkout = new Checkout(pricingRules);

// Handler function for the /checkout route
export const checkoutHandler = (req: Request, res: Response) => {
  const items: string[] = req.body.items; // Assume items are sent in the request body
  items.forEach(item => checkout.scan(item));
  const total = checkout.total();
  res.json({ total });
};

export default checkoutHandler;
