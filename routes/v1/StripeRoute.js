import express from "express";
const router = express.Router();

import Stripe from "../../controllers/StripeController.js";
const stripeController = new Stripe();

router.post('/',stripeController.store);

export default router;