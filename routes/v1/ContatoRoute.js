import express from "express";
const router = express.Router();

import Contato from "../../controllers/ContatoController.js"
const contatoController = new Contato();

router.get('/',contatoController.index);

export default router;
