// ClienteController.js
import Cliente from "../../models/cotizacionesmodelo/ClienteModel.js";

export const getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    await Cliente.create(req.body);
    res.json({ message: "¡Cliente creado correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const id = req.params.id;
    await Cliente.destroy({ where: { id } });
    res.json({ message: "¡Cliente eliminado correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
