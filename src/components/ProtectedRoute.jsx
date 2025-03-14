import React from "react";
import { Navigate, useLocation } from "react-router";

function ProtectedRoute({ children, allowedRoles }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user")); // Obtener el usuario del localStorage

  // Si no hay usuario autenticado, redirigir al login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // Si el usuario está autenticado, mostrar el contenido de la ruta
  return children;
}

export default ProtectedRoute;
