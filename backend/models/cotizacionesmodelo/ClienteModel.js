import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const ClienteModel = db.define("clientes", {
  nombre: { type: DataTypes.STRING },
  nit_cedula: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
  departamento: { type: DataTypes.STRING },
  ciudad: { type: DataTypes.STRING },
  barrio: { type: DataTypes.STRING }
});

export default ClienteModel;
