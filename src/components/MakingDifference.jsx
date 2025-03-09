import React, { useState, useEffect, useRef } from "react";

function MakingDifference() {
  // Estados para los números
  const [students, setStudents] = useState(0);
  const [graduates, setGraduates] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [electives, setElectives] = useState(0);

  // Referencia para la sección
  const sectionRef = useRef(null);

  // Valores finales
  const targetStudents = 1545;
  const targetGraduates = 1200;
  const targetLanguages = 5;
  const targetElectives = 20;

  // Duración del efecto de conteo (en milisegundos)
  const duration = 2000;

  // Función para animar el conteo
  const startCounting = () => {
    const increment = (target, setState) => {
      const step = Math.ceil(target / (duration / 16)); // 16ms por frame
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setState(target);
          clearInterval(timer);
        } else {
          setState(current);
        }
      }, 16);
    };

    increment(targetStudents, setStudents);
    increment(targetGraduates, setGraduates);
    increment(targetLanguages, setLanguages);
    increment(targetElectives, setElectives);
  };

  // Efecto para observar la visibilidad de la sección
  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting(); // Iniciar conteo cuando la sección es visible
            observer.unobserve(entry.target); // Dejar de observar después de iniciar
          }
        });
      },
      { threshold: 0.5 } // Activar cuando el 50% de la sección es visible
    );

    if (currentSectionRef) {
      observer.observe(sectionRef.current); // Observar la sección
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef); // Limpiar observer al desmontar
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/making-difference-bg.jpg')" }}
    >
      {/* Overlay para oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Juntos Haciendo la Diferencia
        </h2>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Estudiantes Matriculados */}
          <div className="text-center">
            <span className="text-5xl font-bold text-white">{students}</span>
            <p className="text-gray-200 mt-2">Estudiantes Matriculados</p>
          </div>

          {/* Graduados */}
          <div className="text-center">
            <span className="text-5xl font-bold text-white">{graduates}</span>
            <p className="text-gray-200 mt-2">Graduados</p>
          </div>

          {/* Idiomas Hablados */}
          <div className="text-center">
            <span className="text-5xl font-bold text-white">{languages}</span>
            <p className="text-gray-200 mt-2">Idiomas Hablados</p>
          </div>

          {/* Electivas */}
          <div className="text-center">
            <span className="text-5xl font-bold text-white">{electives}</span>
            <p className="text-gray-200 mt-2">Electivas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakingDifference;
