import pool from "../config/db.js";
import bcrypt from "bcryptjs";

// Obtener id de facultad por nombre
export const obtenerIdFacultad = async (nombre_facultad) => {
  const result = await pool.query(
    "SELECT id_facultad FROM facultades WHERE LOWER(nombre_facultad) = LOWER($1)",
    [nombre_facultad]
  );
  return result.rows[0]?.id_facultad || null;
};

// Registrar usuario
export const registrarUsuario = async ({ nombre, correo, contrasena, rol, nombre_facultad }) => {
  const id_facultad = await obtenerIdFacultad(nombre_facultad);

  if (!id_facultad) {
    throw new Error(`No se encontró la facultad '${nombre_facultad}'`);
  }

  const hash = await bcrypt.hash(contrasena, 10);
  const result = await pool.query(
    `INSERT INTO usuarios (nombre, correo, contrasena, rol, id_facultad)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id_usuario, nombre, correo, rol, id_facultad`,
    [nombre, correo, hash, rol, id_facultad]
  );
  return result.rows[0];
};

// Buscar usuario por correo
export const buscarUsuarioPorCorreo = async (correo) => {
  const result = await pool.query(`SELECT * FROM usuarios WHERE correo = $1`, [correo]);
  return result.rows[0];
};
