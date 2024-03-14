import express from "express";
const router = express.Router();

import Assinante from "../../controllers/AssinantesController.js";
const assinanteController = new Assinante();

router.get("/",assinanteController.index);
router.post("/",assinanteController.store);

export default router;