import React, { useState, useEffect } from "react";
import axios from "axios";

function Evento() {
  const [eventos, setEventos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");
  const [nuevoEvento, setNuevoEvento] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    imagen: null,
    categoria: "",
  });

  // Obtener las categorías al cargar la página
  useEffect(() => {
    obtenerCategorias();
    obtenerEventos();
  }, []);

  // Obtener las categorías desde el backend
  const obtenerCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categorias");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  // Obtener los eventos desde el backend
  const obtenerEventos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/eventos");
      setEventos(response.data);
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  };

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoEvento({ ...nuevoEvento, [name]: value });
  };

  // Manejar cambios en el archivo de imagen
  const handleFileChange = (e) => {
    setNuevoEvento({ ...nuevoEvento, imagen: e.target.files[0] });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", nuevoEvento.titulo);
    formData.append("descripcion", nuevoEvento.descripcion);
    formData.append("fecha", nuevoEvento.fecha);
    formData.append("imagen", nuevoEvento.imagen);
    formData.append("categoria", nuevoEvento.categoria);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/eventos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEventos([...eventos, response.data]);
      setNuevoEvento({
        titulo: "",
        descripcion: "",
        fecha: "",
        imagen: null,
        categoria: "",
      });
    } catch (error) {
      console.error("Error al agregar el evento:", error);
    }
  };

  const darLike = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/eventos/${id}/like`);
      // Actualizar el estado local para reflejar el like
      setEventos((prevEventos) =>
        prevEventos.map((evento) =>
          evento.id === id ? { ...evento, likes: evento.likes + 1 } : evento
        )
      );
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  };

  // Filtrar eventos por categoría
  const eventosFiltrados =
    categoriaSeleccionada === "todas"
      ? eventos
      : eventos.filter((evento) => evento.categoria === categoriaSeleccionada);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Eventos</h1>

      {/* Selector de categorías */}
      <select
        value={categoriaSeleccionada}
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        className="block w-full p-2 mb-4 border rounded text-gray-600"
      >
        <option value="todas">Todas las categorías</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.nombre}>
            {categoria.nombre}
          </option>
        ))}
      </select>

      {/* Formulario para agregar un nuevo evento */}
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevoEvento.titulo}
          onChange={handleInputChange}
          className="block w-full p-2 mb-2 border rounded text-gray-600"
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={nuevoEvento.descripcion}
          onChange={handleInputChange}
          className="block w-full p-2 mb-2 border rounded text-gray-600"
          required
        />
        <input
          type="date"
          name="fecha"
          value={nuevoEvento.fecha}
          onChange={handleInputChange}
          className="block w-full p-2 mb-2 border rounded text-gray-600"
          required
        />
        <input
          type="file"
          name="imagen"
          onChange={handleFileChange}
          className="block w-full p-2 mb-2 border rounded text-gray-600"
          required
        />
        <select
          name="categoria"
          value={nuevoEvento.categoria}
          onChange={handleInputChange}
          className="block w-full p-2 mb-2 border rounded text-gray-600"
          required
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.nombre}>
              {categoria.nombre}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Crear Evento
        </button>
      </form>

      {/* Lista de eventos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventosFiltrados.map((evento) => (
          <div key={evento.id} className="p-4 border rounded-lg shadow-md">
            {evento.imagen && (
              <img
                src={`http://localhost:5000/uploads/${evento.imagen}`}
                alt="Evento"
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <h2 className="text-xl font-bold text-gray-700">{evento.titulo}</h2>
            <p className="text-gray-600">{evento.descripcion}</p>
            <p className="text-gray-600">Fecha: {evento.fecha}</p>
            <p className="text-gray-600">Likes: {evento.likes}</p>
            <button
              onClick={() => darLike(evento.id)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Evento;
