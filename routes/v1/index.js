import express from "express";

const router = express.Router();

import home from "./HomeRoute.js";
import painel from "./PainelRoute.js";
import register from "./RegisterRoute.js";
import login from "./LoginRoute.js";

router.use("/", home);
router.use("/painel",painel);
router.use("/register", register);
router.use("/login",login);

export default router;