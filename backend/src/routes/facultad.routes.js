import express from "express";
import { obtenerFacultades, agregarFacultad } from "../controllers/facultad.controller.js";

const router = express.Router();

router.get("/", obtenerFacultades);
router.post("/", agregarFacultad);

export default router;
