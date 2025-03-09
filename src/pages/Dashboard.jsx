import React from "react";
import { useLocation, Link } from "react-router";

function Dashboard() {
  const location = useLocation();
  const { user } = location.state || { user: { role: "" } }; // Obtener el usuario desde el estado de la ruta

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">
        Bienvenido al Panel de Control
      </h1>
      <p className="text-gray-600 mb-8">
        Has iniciado sesión correctamente. Aquí puedes gestionar la escuela.
      </p>

      {/* Opciones para el Administrador */}
      {user.role === "administrador" && (
        <div className="space-y-4 w-full max-w-md">
          <Link
            to="/gestion-estudiantes"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Gestión de Estudiantes
          </Link>
          <Link
            to="/calificaciones"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Calificaciones
          </Link>
          <Link
            to="/horarios"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Horarios
          </Link>
        </div>
      )}

      {/* Opciones para el Soporte */}
      {user.role === "soporte" && (
        <div className="space-y-4 w-full max-w-md">
          <Link
            to="/gestion-usuarios"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Gestión de Usuarios
          </Link>
          <Link
            to="/reportes"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Reportes
          </Link>
          <Link
            to="/configuracion"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            Configuración del Sistema
          </Link>
        </div>
      )}

      {/* Opción común para ambos roles */}
      <div className="mt-8 w-full max-w-md">
        <Link
          to="/login"
          className="block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-center"
        >
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
