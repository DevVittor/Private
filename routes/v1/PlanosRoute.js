import express from "express";
const router = express.Router();

import Planos from "../../controllers/PlanosController.js";
const planosController = new Planos();

router.get("/",planosController.index);

export default router;