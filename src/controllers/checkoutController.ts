import { Request, Response } from 'express';
import { Checkout } from '../utils/checkout';
import { pricingRules } from '../services/pricingRules';

export const checkout = (req: Request, res: Response): void => {
  const { items } = req.body;
  const co = new Checkout(pricingRules);
  items.forEach((item: string) => co.scan(item));
  const total = co.total();
  res.json({ total });
};
