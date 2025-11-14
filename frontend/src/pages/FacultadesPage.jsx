import { useEffect, useState } from "react";
import { api } from "../api/api";

function FacultadesPage() {
  const [facultades, setFacultades] = useState([]);

  useEffect(() => {
    api.get("/facultades")
      .then(res => setFacultades(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Facultades disponibles</h1>
      <ul>
        {facultades.map(f => (
          <li key={f.id_facultad}>
            <strong>{f.nombre_facultad}</strong> — {f.ubicacion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultadesPage;
