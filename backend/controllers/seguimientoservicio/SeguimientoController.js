import Seguimiento from "../../models/seguimientoservicio/SeguimientoModel.js";

export const obtenerSeguimientos = async (req, res) => {
  try {
    const seguimientos = await Seguimiento.findAll();
    res.json(seguimientos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerSeguimientoPorOrden = async (req, res) => {
  try {
    const seguimientos = await Seguimiento.findAll({ where: { id: req.params.id } });
    res.json(seguimientos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
