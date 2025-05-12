import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const VisitaProgramadaModel = db.define("visitas_programadas", {
  cliente_id: { type: DataTypes.INTEGER, allowNull: false },
  orden_id: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
  jornada: { type: DataTypes.STRING }
}, {
  tableName: 'visitas_programadas',
  timestamps: true             
});

export default VisitaProgramadaModel;
