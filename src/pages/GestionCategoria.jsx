import React, { useState, useEffect } from "react";
import axios from "axios";

function GestionCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [editando, setEditando] = useState(null); // Estado para manejar la edición

  // Obtener las categorías al cargar la página
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // Función para obtener las categorías desde el backend
  const obtenerCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categorias");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  // Función para agregar una nueva categoría
  const agregarCategoria = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/categorias",
        {
          nombre: nombreCategoria,
        }
      );
      setCategorias([...categorias, response.data]);
      setNombreCategoria(""); // Limpiar el campo de texto
    } catch (error) {
      console.error("Error al agregar la categoría:", error);
    }
  };

  // Función para eliminar una categoría
  const eliminarCategoria = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categorias/${id}`);
      setCategorias(categorias.filter((categoria) => categoria.id !== id));
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
    }
  };

  // Función para editar una categoría
  const editarCategoria = async (id, nuevoNombre) => {
    try {
      await axios.put(`http://localhost:5000/api/categorias/${id}`, {
        nombre: nuevoNombre,
      });
      setCategorias(
        categorias.map((categoria) =>
          categoria.id === id
            ? { ...categoria, nombre: nuevoNombre }
            : categoria
        )
      );
      setEditando(null); // Salir del modo edición
    } catch (error) {
      console.error("Error al editar la categoría:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        Gestión de Categorías
      </h1>

      {/* Formulario para agregar una nueva categoría */}
      <form onSubmit={agregarCategoria} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nombre de la categoría"
            value={nombreCategoria}
            onChange={(e) => setNombreCategoria(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg flex-1 text-gray-600"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Agregar
          </button>
        </div>
      </form>

      {/* Lista de categorías */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Lista de Categorías
        </h2>
        <ul className="space-y-2">
          {categorias.map((categoria) => (
            <li
              key={categoria.id}
              className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center text-gray-600"
            >
              {editando === categoria.id ? (
                <input
                  type="text"
                  defaultValue={categoria.nombre}
                  onBlur={(e) => editarCategoria(categoria.id, e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg text-gray-600"
                />
              ) : (
                <span>{categoria.nombre}</span>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => setEditando(categoria.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarCategoria(categoria.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GestionCategorias;
