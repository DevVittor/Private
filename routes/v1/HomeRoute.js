import express from "express";

const router  = express.Router();

import Home from "../../controllers/HomeController.js";

const homeController = new Home();

router.get("/",homeController.index);

export default router;