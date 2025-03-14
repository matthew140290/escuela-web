import React from "react";
import { Navigate, useLocation } from "react-router";

function PublicRoute({ children }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user")); // Obtener el usuario del localStorage

  // Si el usuario está autenticado, redirigir al Dashboard
  if (user) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  // Si el usuario no está autenticado, mostrar la ruta pública
  return children;
}

export default PublicRoute;
