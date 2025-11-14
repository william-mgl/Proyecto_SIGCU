<form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4"
>
  <h2 className="text-2xl font-semibold text-center text-blue-600">Registro</h2>

  <input
    name="nombre"
    placeholder="Nombre"
    value={form.nombre}
    onChange={handleChange}
    required
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <input
    name="correo"
    type="email"
    placeholder="Correo"
    value={form.correo}
    onChange={handleChange}
    required
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <input
    name="contrasena"
    type="password"
    placeholder="Contraseña"
    value={form.contrasena}
    onChange={handleChange}
    required
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <input
    name="nombre_facultad"
    placeholder="Facultad (Ej: Informática)"
    value={form.nombre_facultad}
    onChange={handleChange}
    required
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <select
    name="rol"
    value={form.rol}
    onChange={handleChange}
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="estudiante">Estudiante</option>
    <option value="docente">Docente</option>
  </select>

  <button
    type="submit"
    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
  >
    Registrar
  </button>
</form>
