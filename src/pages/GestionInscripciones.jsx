import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importar íconos de editar y borrar

function GestionInscripciones() {
  const [inscripciones, setInscripciones] = useState([]);

  // Obtener las inscripciones al cargar la página
  useEffect(() => {
    const obtenerInscripciones = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/inscripciones"
        );
        setInscripciones(response.data);
      } catch (error) {
        console.error("Error al obtener las inscripciones:", error);
      }
    };

    obtenerInscripciones();
  }, []);

  // Función para eliminar una inscripción
  const eliminarInscripcion = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/inscripciones/${id}`);
      setInscripciones(
        inscripciones.filter((inscripcion) => inscripcion.id !== id)
      );
      alert("Inscripción eliminada correctamente");
    } catch (error) {
      console.error("Error al eliminar la inscripción:", error);
      alert("Error al eliminar la inscripción");
    }
  };

  // Función para editar una inscripción (puedes redirigir a un formulario de edición)
  const editarInscripcion = (id) => {
    alert(`Editar inscripción con ID: ${id}`);
    // Aquí puedes redirigir a un formulario de edición o abrir un modal
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        Gestión de Inscripciones
      </h1>
      {inscripciones.length === 0 ? (
        <p className="text-gray-600">No hay registros de inscripciones.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-500 text-center">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="py-2 px-4 border-b text-gray-700">
                  Nombre del Estudiante
                </th>
                <th className="py-2 px-4 border-b text-gray-700">
                  Nivel Educativo
                </th>
                <th className="py-2 px-4 border-b text-gray-700">Grado</th>
                <th className="py-2 px-4 border-b text-gray-700">
                  Nombre Tutor
                </th>
                <th className="py-2 px-4 border-b text-gray-700">Correo</th>
                <th className="py-2 px-4 border-b text-gray-700">Telefono</th>
                <th className="py-2 px-4 border-b text-gray-700">¿Es nuevo?</th>
                <th className="py-2 px-4 border-b text-gray-700">Documentos</th>
                <th className="py-2 px-4 border-b text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {inscripciones.map((inscripcion) => (
                <tr key={inscripcion.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.nombre_estudiante}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.nivel_educativo}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.grado}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.nombre_padre}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.correo}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.telefono}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    {inscripcion.es_Nuevo === 1 ? "Si" : "No"}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    <ul>
                      {inscripcion.documentos
                        .split(",")
                        .map((documento, index) => (
                          <li key={index}>
                            <a
                              href={`http://localhost:5000/api/inscripciones/descargar/${documento}`}
                              download
                              className="text-blue-600 hover:underline"
                            >
                              {documento}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </td>
                  <td className="py-2 px-4 border-b text-gray-600">
                    <button
                      onClick={() => editarInscripcion(inscripcion.id)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => eliminarInscripcion(inscripcion.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GestionInscripciones;
