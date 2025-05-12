

/*import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const CotizacionItemModel = db.define("cotizacion_items", {
  cotizacion_id: { type: DataTypes.INTEGER },
  enumeracion: { type: DataTypes.INTEGER },
  actividad: { type: DataTypes.STRING },
  descripcion: { type: DataTypes.TEXT },
  unidad: { type: DataTypes.STRING },
  cantidad: { type: DataTypes.INTEGER },
  valor_unitario: { type: DataTypes.DECIMAL(10, 2) },
  subtotal: { type: DataTypes.DECIMAL(10, 2) }
});

export default CotizacionItemModel;
*/

import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const CotizacionItemModel = db.define("cotizacion_items", {
  cotizacion_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  item_numero: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  actividad: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  unidad: {
    type: DataTypes.STRING(50),
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
  subtotal: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true
  }
});

export default CotizacionItemModel;

