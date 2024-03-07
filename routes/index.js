import express from "express";

const router = express.Router();

import routerIndex from "./v1/index.js";

router.use("/v1",routerIndex);

export default router;