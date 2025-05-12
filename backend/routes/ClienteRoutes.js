import express from 'express'
import {
  getAllClientes,
  getCliente,
  createCliente,
  deleteCliente
} from '../controllers/contizacionescontrolador/ClienteController.js'

const router = express.Router()

router.get('/', getAllClientes)
router.get('/:id', getCliente)
router.post('/', createCliente)
router.delete('/:id', deleteCliente)

export default router
