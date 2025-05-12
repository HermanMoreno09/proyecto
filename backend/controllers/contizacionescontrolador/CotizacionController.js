// CotizacionController.js
import Cotizacion from '../../models/cotizacionesmodelo/CotizacionModel.js';


export const getAllCotizaciones = async (req, res) => {
  try {
    const cotizaciones = await Cotizacion.findAll();
    res.json(cotizaciones);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCotizacion = async (req, res) => {
  try {
    const cotizacion = await Cotizacion.findOne({ where: { id: req.params.id } });
    res.json(cotizacion);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCotizacion = async (req, res) => {
  try {
    await Cotizacion.create(req.body);
    res.json({ message: "¡Cotización creada correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCotizacion = async (req, res) => {
  try {
    await Cotizacion.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "¡Cotización actualizada correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCotizacion = async (req, res) => {
  try {
    await Cotizacion.destroy({ where: { id: req.params.id } });
    res.json({ message: "¡Cotización eliminada correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};