import express from "express";

const router = express.Router();

import home from "./HomeRoute.js";
import register from "./RegisterRoute.js";
import login from "./LoginRoute.js";

router.use("/", home);
router.use("/register", register);
router.use("/login",login);

export default router;