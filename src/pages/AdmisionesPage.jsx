import React from "react";

function AdmisionesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Admisiones
        </h2>

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información del Proceso */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              Proceso de Admisión
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📅</span>
                <p className="text-gray-600">
                  Fechas de Admisión: Del 1 al 15 de agosto.
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📝</span>
                <p className="text-gray-600">
                  Documentos Requeridos: Acta de nacimiento, CURP y boleta de
                  calificaciones.
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">💰</span>
                <p className="text-gray-600">
                  Costo de Examen de Admisión: $200.00.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Solicitud de Información */}
          <div className="bg-white p-8 rounded-lg text-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Solicita Más Información
            </h3>
            <form>
              {/* Nombre */}
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full px-4 py-2 border text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>

              {/* Correo Electrónico */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="mb-4">
                <label htmlFor="telefono" className="block text-gray-700 mb-2">
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="w-full px-4 py-2 border text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ingresa tu teléfono"
                  required
                />
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Solicitar Información
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmisionesPage;
