import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const SeguimientoModel = db.define("seguimiento_servicio", {
  orden_id: { type: DataTypes.INTEGER, allowNull: false },
  estado: { type: DataTypes.STRING },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  comentarios: { type: DataTypes.TEXT }
}, {
  tableName: 'seguimiento_servicio',
  timestamps: true             
});

export default SeguimientoModel;
