import express from "express";
import { crearVisita, obtenerVisitas } from "../controllers/calendariovisita/VisitaController.js";

const router = express.Router();

router.get("/visitas", obtenerVisitas);
router.post("/visitas", crearVisita);

export default router;
