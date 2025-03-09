export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/students-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">
          Bienvenidos a la Escuela Angela1290
        </h1>
        <p className="mt-4 text-xl">
          Formando el futuro de nuestros niños, con educación de alta calídad
        </p>
        <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded">
          Más Información
        </button>
      </div>
      <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
        <button className="w-50 h-50 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
          <span>Icono</span>
          <span className="text-gray-800">Texto</span>
        </button>
        <button className="w-50 h-50 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
          <span>Icono</span>
          <span className="text-gray-800">Texto</span>
        </button>
        <button className="w-50 h-50 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
          <span>Icono</span>
          <span className="text-gray-800">Texto</span>
        </button>
        {/* Repetir para los otros dos botones */}
      </div>
    </div>
  );
}
