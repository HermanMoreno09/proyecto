import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const CotizacionModel = db.define("cotizaciones", {
  cliente_id: { type: DataTypes.INTEGER, allowNull: true },
  orden_id: { type: DataTypes.INTEGER, allowNull: true },
  fecha: { type: DataTypes.DATE, allowNull: false },
  codigo_cotizacion: { type: DataTypes.STRING(100), allowNull: false },
  subtotal: { type: DataTypes.DECIMAL(10, 0), allowNull: true },
  descuento_porcentaje: { type: DataTypes.DECIMAL(10, 0), allowNull: true },
  subtotal_descuento: { type: DataTypes.DECIMAL(10, 0), allowNull: true },
  impuesto: { type: DataTypes.DECIMAL(10, 0), allowNull: true },
  total: { type: DataTypes.DECIMAL(10, 0), allowNull: true },
  terminos: { type: DataTypes.TEXT, allowNull: true },
  representante_legal: { type: DataTypes.STRING(255), allowNull: true },
  tipo_documento: { type: DataTypes.STRING(50), allowNull: true },
  numero_documento: { type: DataTypes.STRING(100), allowNull: true },
  creado_por: { type: DataTypes.INTEGER, allowNull: true },
});


export default CotizacionModel;