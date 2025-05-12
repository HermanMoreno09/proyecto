import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const UsuarioModel = db.define("usuariosrol", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false, unique: true },
  contrasena: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'usuariosrol',
  timestamps: true             
});

export default UsuarioModel;
