import express from "express";
const router = express.Router();

import Login from "../../controllers/LoginController.js"
const loginController = new Login();

router.get("/",loginController.index);
router.post("/check",loginController.store);
router.put("/:id",loginController.put);
router.delete("/:id",loginController.delete);

export default router;