// import React, { useState } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import EventCard from "./components/EventCard";
import LevelsSection from "./components/LevelsSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import MakingDifference from "./components/MakingDifference";
import ContactSection from "./components/ContactSection";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AdmisionesPage from "./pages/AdmisionesPage";
import InscripcionesPage from "./pages/InscripcionesPage";
import ContactoPage from "./pages/ContactoPage"; // Nueva página de Contacto
import NuestraInstitucionPage from "./pages/NuestraInstitucionPage"; // Nueva página
import GobiernoEscolarPage from "./pages/GobiernoEscolarPage"; // Nueva página
import EstatutosPage from "./pages/EstatutosPage";
function App() {
  // const [events, setEvents] = useState([]);

  // Cargar eventos dinámicamente al montar el componente
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/events");
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error("Error al cargar eventos:", error);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  // Función para manejar el like en un evento
  // const handleLike = async (id) => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:5000/api/events/like/${id}`
  //     );
  //     const updatedEvents = events.map((event) =>
  //       event.id === id ? { ...event, likes: response.data.likes } : event
  //     );
  //     setEvents(updatedEvents);
  //   } catch (error) {
  //     console.error("Error al dar like:", error);
  //   }
  // };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar (no se muestra en la página de Login) */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/inscripciones"
            element={
              <Layout>
                <InscripcionesPage />
              </Layout>
            }
          />
          <Route
            path="/solicitudes"
            element={
              <Layout>
                <AdmisionesPage />
              </Layout>
            }
          />

          <Route
            path="/contacto"
            element={
              <Layout>
                <ContactoPage />
              </Layout>
            }
          />
          <Route
            path="/nuestra-institucion"
            element={
              <Layout>
                <NuestraInstitucionPage />
              </Layout>
            }
          />
          <Route
            path="/gobierno-escolar"
            element={
              <Layout>
                <GobiernoEscolarPage />
              </Layout>
            }
          />
          <Route
            path="/estatutos"
            element={
              <Layout>
                <EstatutosPage />
              </Layout>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Navbar />

                <Hero />
                <section className="container mx-auto my-40 px-4">
                  <h2 className="text-3xl font-bold text-center mb-6 text-gray-600">
                    Eventos Institucionales
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* {events.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onLike={() => handleLike(event.id)}
                      />
                    ))} */}
                  </div>
                </section>
                <AboutUs />
                <LevelsSection />
                <WhyChooseUs />
                <MakingDifference />
                <ContactSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
