import React, { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Escuela Angela1290</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-200">
              Inicio
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-200 focus:outline-none"
            >
              Institucionalidad
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <Link
                  to="/nuestra-institucion"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  Nuestra Institución
                </Link>
                <Link
                  to="/gobierno-escolar"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  Gobierno Escolar
                </Link>
                <Link
                  to="/estatutos"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  Estatutos
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/solicitudes" className="hover:text-blue-200">
              Admisiones
            </Link>
          </li>
          <li>
            <Link to="/inscripciones" className="hover:text-blue-200">
              Inscripciones
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-blue-200">
              Contáctanos
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-blue-200"
              title="Solo para administradores"
              target="_blank"
            >
              Inicia sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
