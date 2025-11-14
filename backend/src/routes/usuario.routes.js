import express from "express";
import { registro, login } from "../controllers/usuario.controller.js";

const router = express.Router();

router.post("/registro", registro);
router.post("/login", login);

export default router;
