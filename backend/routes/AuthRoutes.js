import express from "express";
import { registrar, login, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario } from "../controllers/autenticacioncontrolador/AuthController.js";

const router = express.Router();
router.post("/register", registrar);
router.post("/login", login);
router.get("/usuarios", obtenerUsuarios);
router.get("/usuarios/:id", obtenerUsuarioPorId);
router.put("/usuarios/:id", actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

export default router;
