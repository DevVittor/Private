import express from "express";
const router = express.Router();

import Sobre from "../../controllers/SobreController.js";
const sobreController = new Sobre();

router.get("/",sobreController.index);

export default router;