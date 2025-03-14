import React, { useState } from "react";
import axios from "axios";

function InscripcionesPage() {
  // Estados para manejar los datos del formulario
  const [nivelEducativo, setNivelEducativo] = useState("");
  const [grado, setGrado] = useState("");
  const [documentos, setDocumentos] = useState([]);
  const [esNuevo, setEsNuevo] = useState(true); // Estado para el checkbox

  // Opciones de grados según el nivel educativo
  const gradosPorNivel = {
    preescolar: ["Párvulo", "Prekinder", "Kinder", "Transición"],
    primaria: ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"],
    secundaria: ["Sexto", "Séptimo", "Octavo", "Noveno", "Décimo", "Undécimo"],
  };

  // Manejar cambios en el nivel educativo
  const handleNivelEducativoChange = (e) => {
    const nivel = e.target.value;
    setNivelEducativo(nivel);
    setGrado(""); // Reiniciar el grado al cambiar el nivel
  };

  // Manejar cambios en los documentos
  const handleDocumentosChange = (e) => {
    const files = Array.from(e.target.files); // Convertir FileList a Array
    setDocumentos(files);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData
    const formData = new FormData();

    // Agregar los campos del formulario al FormData
    formData.append("nombre_estudiante", e.target.nombre.value);
    formData.append("No_identificacion", e.target.tarjetaIdentidad.value);
    formData.append("nivel_educativo", nivelEducativo);
    formData.append("grado", grado);
    formData.append("nombre_padre", e.target.padre.value);
    formData.append("correo", e.target.correo.value);
    formData.append("telefono", e.target.telefono.value);
    formData.append("es_Nuevo", esNuevo ? 1 : 0);

    // Agregar los archivos al FormData
    documentos.forEach((file) => {
      formData.append("documentos", file); // "documentos" debe coincidir con el nombre esperado en el backend
    });

    try {
      // Enviar los datos al backend
      const response = await axios.post(
        "http://localhost:5000/api/inscripciones",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Importante para enviar archivos
          },
        }
      );
      console.log("Inscripción exitosa:", response.data);
      alert("Inscripción Enviada");

      setNivelEducativo("");
      setGrado("");
      setDocumentos([]);
      setEsNuevo(false);

      e.target.nombre.value = "";
      e.target.tarjetaIdentidad.value = "";
      e.target.padre.value = "";
      e.target.correo.value = "";
      e.target.telefono.value = "";
      e.target.documentos.value = "";
    } catch (error) {
      console.error(
        "Error al enviar la inscripción:",
        error.response?.data || error.message
      );
      alert("Error al enviar la inscripción");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{ backgroundImage: "url('./images/fondoInscripciones.jpg')" }}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Inscripciones
        </h2>

        {/* Información Adicional */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Información Importante
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl mr-4">📅</span>
              <p className="text-gray-600">
                Fechas de Inscripción: Del 1 al 30 de septiembre.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl mr-4">📝</span>
              <p className="text-gray-600">
                Documentos Requeridos: Acta de nacimiento, CURP y comprobante de
                domicilio.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl mr-4">💰</span>
              <p className="text-gray-600">
                Costo de Inscripción: $500.00 (único pago).
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de Inscripción */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">
            Formulario de Inscripción
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre del Estudiante */}
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 mb-2">
                  Nombre del Estudiante
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  placeholder="Ingresa el nombre completo"
                  required
                />
              </div>

              {/* Número de Tarjeta de Identidad o Registro Civil */}
              <div className="mb-4">
                <label
                  htmlFor="tarjetaIdentidad"
                  className="block text-gray-700 mb-2"
                >
                  Número T.I o Registro Civil
                </label>
                <input
                  type="text"
                  id="tarjetaIdentidad"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  placeholder="Ingresa el número de identidad"
                  required
                />
              </div>

              {/* Nivel Educativo */}
              <div className="mb-4">
                <label
                  htmlFor="nivelEducativo"
                  className="block text-gray-700 mb-2"
                >
                  Nivel Educativo
                </label>
                <select
                  id="nivelEducativo"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  value={nivelEducativo}
                  onChange={handleNivelEducativoChange}
                  required
                >
                  <option value="">Selecciona un nivel educativo</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                </select>
              </div>

              {/* Grado */}
              <div className="mb-4">
                <label htmlFor="grado" className="block text-gray-700 mb-2">
                  Grado
                </label>
                <select
                  id="grado"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  value={grado}
                  onChange={(e) => setGrado(e.target.value)}
                  required
                  disabled={!nivelEducativo} // Deshabilitar si no se ha seleccionado un nivel
                >
                  <option value="">Selecciona un grado</option>
                  {nivelEducativo &&
                    gradosPorNivel[nivelEducativo].map((gradoOption) => (
                      <option key={gradoOption} value={gradoOption}>
                        {gradoOption}
                      </option>
                    ))}
                </select>
              </div>

              {/* Nombre del Padre/Madre/Tutor */}
              <div className="mb-4">
                <label htmlFor="padre" className="block text-gray-700 mb-2">
                  Nombre del Padre/Madre/Tutor
                </label>
                <input
                  type="text"
                  id="padre"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  placeholder="Ingresa el nombre del padre/madre/tutor"
                  required
                />
              </div>

              {/* Correo Electrónico */}
              <div className="mb-4">
                <label htmlFor="correo" className="block text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  placeholder="Ingresa el correo electrónico"
                  required
                />
              </div>

              {/* Teléfono de Contacto */}
              <div className="mb-4">
                <label htmlFor="telefono" className="block text-gray-700 mb-2">
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  placeholder="Ingresa el teléfono"
                  required
                />
              </div>

              {/* Subir Documentos */}
              <div className="mb-4">
                <label
                  htmlFor="documentos"
                  className="block text-gray-700 mb-2"
                >
                  Subir Documentos
                </label>
                <input
                  type="file"
                  id="documentos"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  multiple // Permitir subir varios archivos
                  onChange={handleDocumentosChange}
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Sube todos los documentos requeridos (Acta de nacimiento,
                  CURP, comprobante de domicilio, etc.).
                </p>
              </div>

              {/* Checkbox para indicar si el estudiante es nuevo */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    id="esNuevo"
                    type="checkbox"
                    checked={esNuevo}
                    onChange={(e) => setEsNuevo(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Estudiante nuevo</span>
                </label>
              </div>
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Inscripción
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InscripcionesPage;
