import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("administrador");
  const [error, setError] = useState(""); // Estado para manejar errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores anteriores

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
          role,
        }
      );

      if (response.data.message === "Inicio de sesión exitoso") {
        // Guardar el usuario en localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirigir al Dashboard
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      // Manejar errores de la solicitud
      if (error.response && error.response.data.message) {
        setError(error.response.data.message); // Mostrar mensaje de error del backend
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/loginImage.jpg')" }}
    >
      {/* Overlay para oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

      {/* Recuadro de inicio de sesión */}
      <div className="bg-white/90 p-8 rounded-lg shadow-lg z-10 w-full max-w-md">
        {/* Botón para regresar a la pantalla inicial */}
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          &larr; Regresar
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/iconoSchool.png"
            alt="Logo de la Escuela"
            className="w-24 h-24"
          />
        </div>

        {/* Texto descriptivo */}
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-600">
          Inicio de Sesión Administrativo
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Ingresa tus credenciales para acceder al sistema.
        </p>

        {/* Mostrar errores */}
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Campo de usuario */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {/* Selector de rol */}
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Rol
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
              required
            >
              <option value="administrador">Administrador</option>
              <option value="soporte">Soporte</option>
            </select>
          </div>

          {/* Botón de ingreso */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
