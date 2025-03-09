function WhyChooseUs() {
  const values = [
    {
      icon: "📚", // Ícono
      title: "Educación de Calidad",
      description:
        "Nuestro programa educativo está diseñado para brindar una formación integral y de excelencia.",
      color: "bg-blue-100", // Color de fondo
    },
    {
      icon: "👩‍🏫",
      title: "Profesores Calificados",
      description:
        "Contamos con un equipo de docentes altamente capacitados y comprometidos.",
      color: "bg-green-100",
    },
    {
      icon: "🏫",
      title: "Infraestructura Moderna",
      description:
        "Instalaciones equipadas con tecnología de punta para un aprendizaje óptimo.",
      color: "bg-yellow-100",
    },
    {
      icon: "❤️",
      title: "Ambiente Inclusivo",
      description:
        "Fomentamos un entorno de respeto, diversidad y apoyo mutuo.",
      color: "bg-pink-100",
    },
    {
      icon: "🏆",
      title: "Resultados Comprobados",
      description:
        "Nuestros estudiantes destacan en pruebas nacionales e internacionales.",
      color: "bg-purple-100",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-600">
          ¿Por Qué Elegirnos?
        </h2>

        {/* Texto corto */}
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Somos una institución comprometida con la excelencia académica y el
          desarrollo integral de nuestros estudiantes.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${value.color} flex flex-col items-center text-center`}
            >
              {/* Ícono */}
              <span className="text-4xl mb-4">{value.icon}</span>

              {/* Título */}
              <h3 className="text-xl font-bold mb-2 text-gray-600">
                {value.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
