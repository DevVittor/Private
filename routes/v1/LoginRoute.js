import express from "express";
const router = express.Router();

import Login from "../../controllers/LoginController.js"
const loginController = new Login();

router.get("/",loginController.index);
router.post("/check",loginController.store);

export default router;