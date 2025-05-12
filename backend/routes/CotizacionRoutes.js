import express from 'express'
import {
  getAllCotizaciones,
  getCotizacion,
  createCotizacion,
  updateCotizacion,
  deleteCotizacion
} from '../controllers/contizacionescontrolador/CotizacionController.js'

const router = express.Router()

router.get('/', getAllCotizaciones)
router.get('/:id', getCotizacion)
router.post('/', createCotizacion)
router.put('/:id', updateCotizacion)
router.delete('/:id', deleteCotizacion)

export default router
