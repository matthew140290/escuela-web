import React from "react";

function InscripcionesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Inscripciones
        </h2>

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario de Inscripción */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-gray-500">
            <h3 className="text-2xl font-bold mb-6">
              Formulario de Inscripción
            </h3>
            <form>
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

              {/* Grado */}
              <div className="mb-4">
                <label htmlFor="grado" className="block text-gray-700 mb-2">
                  Grado
                </label>
                <select
                  id="grado"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  required
                >
                  <option value="">Selecciona un grado</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                </select>
              </div>

              {/* Nombre del Padre/Madre */}
              <div className="mb-4">
                <label htmlFor="padre" className="block text-gray-700 mb-2">
                  Nombre del Padre/Madre
                </label>
                <input
                  type="text"
                  id="padre"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-400"
                  placeholder="Ingresa el nombre del padre/madre"
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

              {/* Botón de Envío */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Inscripción
              </button>
            </form>
          </div>

          {/* Información Adicional */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-500">
              Información Importante
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📅</span>
                <p className="text-gray-600">
                  Fechas de Inscripción: Del 1 al 30 de septiembre.
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📝</span>
                <p className="text-gray-600">
                  Documentos Requeridos: Acta de nacimiento, CURP y comprobante
                  de domicilio.
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
        </div>
      </div>
    </div>
  );
}

export default InscripcionesPage;
