import { useState } from "react";
import { api } from "../api/api";

function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/usuarios/login", { correo, contrasena });
      alert(`Bienvenido ${res.data.usuario.nombre}`);
    } catch (err) {
      console.error(err);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h2>Iniciar sesión</h2>
      <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default LoginPage;
