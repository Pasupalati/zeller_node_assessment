import { Router } from 'express';
import checkoutHandler from '../controllers/checkoutController'; // Correct import

const router = Router();

router.post('/checkout', checkoutHandler);

export default router;