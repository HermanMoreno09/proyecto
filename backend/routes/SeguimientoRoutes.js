import express from "express";
import { obtenerSeguimientos, obtenerSeguimientoPorOrden } from "../controllers/seguimientoservicio/SeguimientoController.js";

const router = express.Router();

router.get("/seguimientos", obtenerSeguimientos);
router.get("/seguimientos/:id", obtenerSeguimientoPorOrden);

export default router;
