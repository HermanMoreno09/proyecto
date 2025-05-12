// ItemController.js
/*import Item from "../../models/cotizacionesmodelo/CotizacionItemModel.js";

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  try {
    await Item.create(req.body);
    res.json({ message: "¡Item creado correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};*/

// ItemController.js
import Item from "../../models/cotizacionesmodelo/CotizacionItemModel.js";

// Obtener todos los ítems
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un ítem por ID
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Ítem no encontrado" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un ítem
export const createItem = async (req, res) => {
  try {
    await Item.create(req.body);
    res.status(201).json({ message: "¡Ítem creado correctamente!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un ítem por ID
export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Ítem no encontrado" });
    }
    await item.update(req.body);
    res.json({ message: "¡Ítem actualizado correctamente!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un ítem por ID
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Ítem no encontrado" });
    }
    await item.destroy();
    res.json({ message: "¡Ítem eliminado correctamente!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
