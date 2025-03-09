function LevelsSection() {
  const levels = [
    {
      title: "Primeros Años",
      image: "/images/preSchool.jpg", // Ruta de la imagen
      description:
        "Early Years combina las mejores prácticas del currículo del Reino Unido y de la Universidad de Cambridge con los requisitos colombianos, preparando a los estudiantes de manera integral.",
      buttonText: "Ver más",
    },
    {
      title: "Primaria",
      image: "/images/primarySchool.jpg", // Ruta de la imagen
      description:
        "Primaria combina tres programas educativos para ofrecer una educación completa, centrándose en el alto nivel académico y en los aspectos sociales y emocionales de los estudiantes, con adaptabilidad a sus características individuales.",
      buttonText: "Ver más",
    },
    {
      title: "Secundaria",
      image: "/images/secondary.jpg", // Ruta de la imagen
      description:
        "La Secundaria fusiona currículos nacionales e internacionales, como el Programa de Bachillerato Internacional (IB), para brindar a los estudiantes una educación integral y prepararlos para los estándares globales, fomentando habilidades esenciales para el éxito.",
      buttonText: "Ver más",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-600">
          Niveles Educativos
        </h2>

        {/* Contenedor de Niveles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Imagen */}
              <img
                src={level.image}
                alt={level.title}
                className="w-full h-48 object-cover"
              />

              {/* Contenido */}
              <div className="p-6">
                {/* Título del Nivel */}
                <h3 className="text-xl font-bold mb-4 text-gray-600">
                  {level.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 mb-6">{level.description}</p>

                {/* Botón */}
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  {level.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LevelsSection;
