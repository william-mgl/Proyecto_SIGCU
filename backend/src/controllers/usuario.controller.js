import bcrypt from "bcryptjs";
import { registrarUsuario, buscarUsuarioPorCorreo } from "../models/usuario.model.js";

// Registro
export const registro = async (req, res) => {
  try {
    const { nombre, correo, contrasena, rol, nombre_facultad } = req.body;

    const existe = await buscarUsuarioPorCorreo(correo);
    if (existe) return res.status(400).json({ message: "El correo ya está registrado" });

    const nuevoUsuario = await registrarUsuario({ nombre, correo, contrasena, rol, nombre_facultad });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario", error: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    const usuario = await buscarUsuarioPorCorreo(correo);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    const valid = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

    res.json({
      message: "Inicio de sesión exitoso",
      usuario: {
        id_usuario: usuario.id_usuario,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
        id_facultad: usuario.id_facultad
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el inicio de sesión", error });
  }
};
