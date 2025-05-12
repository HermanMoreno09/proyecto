/*import express from 'express'
import {
  getAllItems,
  createItem
} from '../controllers/contizacionescontrolador/ItemController.js'

const router = express.Router()

router.get('/', getAllItems)
router.post('/', createItem)




export default router*/

import express from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from '../controllers/contizacionescontrolador/ItemController.js';

const router = express.Router();

// Obtener todos los ítems
router.get('/', getAllItems);

// Obtener un ítem por ID
router.get('/:id', getItemById);

// Crear un nuevo ítem
router.post('/', createItem);

// Actualizar un ítem existente por ID
router.put('/:id', updateItem);

// Eliminar un ítem por ID
router.delete('/:id', deleteItem);

export default router;

