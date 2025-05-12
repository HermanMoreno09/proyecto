import Visita from "../../models/calendariovisitas/VisitaProgramadaModel.js";

export const crearVisita = async (req, res) => {
  try {
    await Visita.create(req.body);
    res.json({ message: "Visita programada correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerVisitas = async (req, res) => {
  try {
    const visitas = await Visita.findAll();
    res.json(visitas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
