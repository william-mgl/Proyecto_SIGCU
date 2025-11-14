import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import facultadRoutes from "./routes/facultad.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/facultades", facultadRoutes);
app.use("/api/usuarios", usuarioRoutes);


export default app;
