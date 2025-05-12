/*import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const CotizacionSuministroModel = db.define("cotizacion_suministros", {
  item_id: { type: DataTypes.INTEGER },
  enumeracion: { type: DataTypes.INTEGER },
  nombre_item: { type: DataTypes.STRING },
  unidad: { type: DataTypes.STRING },
  cantidad: { type: DataTypes.INTEGER },
  costo: { type: DataTypes.DECIMAL(10, 2) },
  valor_unitario: { type: DataTypes.DECIMAL(10, 2) }
});

export default CotizacionSuministroModel;*/
import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const CotizacionSuministroModel = db.define("cotizacion_suministros", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nombre_item: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  unidad: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  cantidad: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true
  },
  valor_unitario: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true
  },
  costo_total: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true
  }
}, {
  tableName: 'cotizacion_suministros',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

export default CotizacionSuministroModel;

