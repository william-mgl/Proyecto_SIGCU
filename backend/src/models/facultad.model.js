import pool from "../config/db.js";

export const getFacultades = async () => {
  const result = await pool.query("SELECT * FROM facultades ORDER BY id_facultad");
  return result.rows;
};

export const createFacultad = async (nombre_facultad, ubicacion) => {
  const result = await pool.query(
    "INSERT INTO facultades (nombre_facultad, ubicacion) VALUES ($1, $2) RETURNING *",
    [nombre_facultad, ubicacion]
  );
  return result.rows[0];
};
