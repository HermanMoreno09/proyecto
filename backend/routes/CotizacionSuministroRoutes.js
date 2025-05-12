/*import express from 'express'
import {
  getAllSuministros,
  createSuministro
} from '../controllers/contizacionescontrolador/SuministroController.js'

const router = express.Router()
router.get('/', getAllSuministros)
router.post('/', createSuministro)
export default router*/
import express from 'express';
import {
  getAllSuministros,
  getSuministro,
  createSuministro,
  updateSuministro,
  deleteSuministro
} from '../controllers/contizacionescontrolador/SuministroController.js';

const router = express.Router();

router.get('/', getAllSuministros);
router.get('/:id', getSuministro);
router.post('/', createSuministro);
router.put('/:id', updateSuministro);
router.delete('/:id', deleteSuministro);

export default router;

