import express from "express";

const router = express.Router();

import home from "./HomeRoute.js";
import planos from "./PlanosRoute.js";
import sobre from "./SobreRoute.js";
import contato from "./ContatoRoute.js";
import painel from "./PainelRoute.js";
import register from "./RegisterRoute.js";
import assinante from "./AssinanteRoute.js";
import stripe from "./StripeRoute.js";
import login from "./LoginRoute.js";

router.use("/", home);
router.use("/planos",planos);
router.use("/sobre",sobre);
router.use("/contato",contato);
router.use("/painel",painel);
router.use("/register", register);
router.use("/assinante",assinante);
router.use('/stripe',stripe);
router.use("/login",login);

export default router;