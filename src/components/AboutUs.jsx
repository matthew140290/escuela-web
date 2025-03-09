function AboutUs() {
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Imagen a la izquierda */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/campus.jpg" // Ruta de la imagen
              alt="Sobre Nosotros"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Contenido a la derecha */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8">
            {/* Título */}
            <h2 className="text-4xl font-bold text-white mb-4">
              Sobre Nosotros
            </h2>

            {/* Texto descriptivo (opcional) */}
            <p className="text-gray-200 mb-6">
              La escuela X, con más de 40 años de experiencia, se dedica a
              formar ciudadanos imtegrales. Ofrecemos educación trilingüe,
              español, inglés y francés en un entorno natural sumamente
              inspirador. Nos enfocamos en el bienestar socioemocional de
              nuestra comunidad y nos destacamos en la implementación programas
              internacionales como el IB y Cambridge, preparando líderes
              globales para un mundo diverso y cambiante. Únete a nuestra
              comunidad de excelencia académica y desarrollo personal
            </p>

            {/* Botón */}
            <button className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-100 transition-colors">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
