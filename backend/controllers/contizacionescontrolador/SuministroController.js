/*import Suministro from "../../models/cotizacionesmodelo/CotizacionSuministroModel.js";

export const getAllSuministros = async (req, res) => {
  try {
    const suministros = await Suministro.findAll();
    res.json(suministros);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createSuministro = async (req, res) => {
  try {
    await Suministro.create(req.body);
    res.json({ message: "¡Suministro creado correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};*/
import Suministro from "../../models/cotizacionesmodelo/CotizacionSuministroModel.js";

export const getAllSuministros = async (req, res) => {
  try {
    const suministros = await Suministro.findAll();
    res.json(suministros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSuministro = async (req, res) => {
  try {
    const suministro = await Suministro.findOne({ where: { id: req.params.id } });
    if (suministro) {
      res.json(suministro);
    } else {
      res.status(404).json({ message: "Suministro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSuministro = async (req, res) => {
  try {
    await Suministro.create(req.body);
    res.json({ message: "¡Suministro creado correctamente!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSuministro = async (req, res) => {
  try {
    const [updated] = await Suministro.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      res.json({ message: "¡Suministro actualizado correctamente!" });
    } else {
      res.status(404).json({ message: "Suministro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSuministro = async (req, res) => {
  try {
    const deleted = await Suministro.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: "¡Suministro eliminado correctamente!" });
    } else {
      res.status(404).json({ message: "Suministro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

