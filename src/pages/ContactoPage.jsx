import React from "react";

function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-600">
          Contáctanos
        </h2>

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario de Contacto */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-600">
              Envía un Mensaje
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
                  className="w-full px-4 py-2 text-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ingresa tu nombre"
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
                  className="w-full px-4 py-2 text-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>

              {/* Mensaje */}
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  className="w-full px-4 py-2 border text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="5"
                  placeholder="Escribe tu mensaje"
                  required
                ></textarea>
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-600">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📍</span>
                <p className="text-gray-600">
                  Dirección: Calle Falsa 123, Ciudad Ejemplo, País
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📞</span>
                <p className="text-gray-600">Teléfono: +123 456 789</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">📧</span>
                <p className="text-gray-600">Email: info@escuela1290.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 text-2xl mr-4">🌐</span>
                <p className="text-gray-600">Sitio Web: www.escuela1290.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoPage;
