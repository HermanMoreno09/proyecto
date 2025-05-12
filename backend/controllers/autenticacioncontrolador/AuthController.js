/*import Usuario from "../../models/autenticacionlogin/UsuarioModel.js";
import bcrypt from "bcrypt";

// Registrar usuario
export const registrar = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  try {
    const hash = await bcrypt.hash(contrasena, 10);
    await Usuario.create({ nombre, correo, contrasena: hash });
    res.json({ message: "¡Usuario registrado correctamente!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    const valido = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!valido) return res.status(401).json({ message: "Contraseña incorrecta" });

    res.json({ message: "Login exitoso", usuario: { id: usuario.id, nombre: usuario.nombre } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/
import Usuario from "../../models/autenticacionlogin/UsuarioModel.js";

// Registrar usuario (sin encriptar)
export const registrar = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  try {
    await Usuario.create({ nombre, correo, contrasena }); // guarda la contraseña tal como viene
    res.json({ message: "¡Usuario registrado correctamente!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login de usuario (sin comparar hash)
export const login = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    if (contrasena !== usuario.contrasena) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.json({ message: "Login exitoso", usuario: { id: usuario.id, nombre: usuario.nombre } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario (sin encriptar contraseña)
export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contrasena } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    await usuario.update({ nombre, correo, contrasena });
    res.json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    await usuario.destroy();
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
