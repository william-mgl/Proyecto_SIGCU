-- ===========================================
--   Base de Datos: Sistema de Comida Universitaria Inteligente
--   Autor: Mateo y Jesus
--   Descripción: Estructura inicial sin triggers ni funciones
-- ===========================================

-- ===========================================
-- Tabla: Facultades
-- ===========================================
CREATE TABLE facultades (
    id_facultad SERIAL PRIMARY KEY,
    nombre_facultad VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(150)
);

-- ===========================================
-- Tabla: Comedores
-- ===========================================
CREATE TABLE comedores (
    id_comedor SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_facultad INT REFERENCES facultades(id_facultad) ON DELETE CASCADE,
    horario_apertura TIME NOT NULL,
    horario_cierre TIME NOT NULL
);

-- ===========================================
-- Tabla: Usuarios
-- ===========================================
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(120) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol VARCHAR(20) CHECK (rol IN ('estudiante', 'docente', 'admin')) NOT NULL,
    id_facultad INT REFERENCES facultades(id_facultad) ON DELETE SET NULL
);

-- ===========================================
-- Tabla: Platos
-- ===========================================
CREATE TABLE platos (
    id_plato SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    calorias INT,
    proteinas NUMERIC(5,2),
    carbohidratos NUMERIC(5,2),
    grasas NUMERIC(5,2)
);

-- ===========================================
-- Tabla: Menú Diario
-- ===========================================
CREATE TABLE menu_diario (
    id_menu SERIAL PRIMARY KEY,
    id_comedor INT REFERENCES comedores(id_comedor) ON DELETE CASCADE,
    id_plato INT REFERENCES platos(id_plato) ON DELETE CASCADE,
    fecha DATE NOT NULL
);

-- ===========================================
-- Tabla: Reservas
-- ===========================================
CREATE TABLE reservas (
    id_reserva SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_menu INT REFERENCES menu_diario(id_menu) ON DELETE CASCADE,
    hora_reserva TIME NOT NULL,
    estado VARCHAR(20) CHECK (estado IN ('pendiente', 'entregado', 'cancelado')) DEFAULT 'pendiente'
);
