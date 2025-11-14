import { getFacultades, createFacultad } from "../models/facultad.model.js";

export const obtenerFacultades = async (req, res) => {
  try {
    const data = await getFacultades();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las facultades", error });
  }
};

export const agregarFacultad = async (req, res) => {
  const { nombre_facultad, ubicacion } = req.body;
  try {
    const nueva = await createFacultad(nombre_facultad, ubicacion);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la facultad", error });
  }
};
