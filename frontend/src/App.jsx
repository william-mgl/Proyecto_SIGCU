import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FacultadesPage from "./pages/FacultadesPage";
import RegistroPage from "./pages/RegistroPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      {/* 🧭 Barra de navegación */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Comida Universitaria</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200 transition-colors">Facultades</Link>
          <Link to="/registro" className="hover:text-gray-200 transition-colors">Registro</Link>
          <Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link>
        </div>
      </nav>

      {/* 📄 Contenido principal */}
      <main className="p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<FacultadesPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
