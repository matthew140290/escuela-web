import React from "react";
import { Link, useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      {/* Logo y nombre de la escuela */}
      <div className="p-4 text-center">
        <img
          src="..//images/iconoSchool.png"
          alt="Logo"
          className="w-16 h-16 mx-auto mb-2"
        />
        <h2 className="text-xl font-bold">Nombre de la Escuela</h2>
      </div>

      {/* Opciones de navegación */}
      <nav className="flex-1 mt-4">
        {/* Opciones para el administrador */}
        {user.role === "administrador" && (
          <>
            <Link
              to="/dashboard/gestion-inscripciones"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Gestión de Inscripciones
            </Link>
            <Link
              to="/dashboard/crear-evento"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Crear Evento
            </Link>
            <Link
              to="/dashboard/gestion-categoria"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Crear categoria
            </Link>
          </>
        )}

        {/* Opciones para el soporte (super admin) */}
        {user.role === "soporte" && (
          <>
            <Link
              to="/dashboard/gestion-inscripciones"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Gestión de Inscripciones
            </Link>
            <Link
              to="/dashboard/crear-evento"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Crear Evento
            </Link>
            <Link
              to="/dashboard/categoria-eventos"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Crear categoria
            </Link>
            <Link
              to="/dashboard/gestion-usuarios"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Gestión de Usuarios
            </Link>
            <Link
              to="/dashboard/configuracion"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Configuración del Sistema
            </Link>
          </>
        )}
      </nav>

      {/* Usuario y cerrar sesión */}
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm">Usuario: {user.username}</p>
        <button
          onClick={handleLogout}
          className="mt-2 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
