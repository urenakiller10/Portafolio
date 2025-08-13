import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import './App.css';

import hotelImg from './assets/principal.jpg';
import waldorfImg from './assets/waldorf.jpg';
import cityenImg from './assets/cityzen.jpg';
import abottImg from './assets/abott.jpeg';
import esmeraldaImg from './assets/esmeralda.jpg';
import log1 from './assets/log1.jpg';  // Ajusta la ruta y nombre según tu archivo

// Tus páginas
import About from "./about";
import Proyectos from "./proyectos";


function Navbar() {
  const location = useLocation();

  // Solo en Home mostramos logo + info
  if (location.pathname === '/') {
    return (
      <header className="navbar">
        <div className="logo-container">
          <img src={log1} alt="Logo" className="logo-image" />
          <h2>Allan Gerardo Ureña Bermúdez</h2>
          <p>Ingeniero civil</p>
        </div>
        <hr className="separator" />
        <nav className="navbar-menu" style={{ fontFamily: 'Calibri',fontSize: '22px', width: '80%', justifyContent: 'center' }}>
          <Link to="/about"><strong>Acerca de mí</strong></Link>
          <Link to="/proyectos"><strong>Proyectos</strong></Link>
         
        </nav>
      </header>
    );
  }

  // En otras rutas solo menú sin logo
  return (
    <header className="navbar">
      <nav className="navbar-menu" style={{fontFamily: 'Calibri', fontSize: '19px', width: '80%', justifyContent: 'center' }}>
        <Link to="/"><strong>Inicio</strong></Link>
        <Link to="/about"><strong>Acerca de mí</strong></Link>
        <Link to="/proyectos"><strong>Proyectos</strong></Link>
       
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="container">
      {/* Imagen principal */}
      <div className="main-image">
        <img src={hotelImg} alt="Hotel construido" />
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h2> Ingeniería civil enfocada en gestión y ejecución de obras de gran escala y alto estándar de calidad</h2>
          <p>
Con experiencia en la gestión y ejecución de proyectos residenciales, hoteleros, industriales y comerciales de gran envergadura.
Más de 5 años liderando obras icónicas en Costa Rica, como la Torre 4 de Punta Esmeralda en Jacó, el hotel de lujo Waldorf Astoria en Guanacaste, la planta médica Abbott Medical, el complejo industrial Orchid Shell y el desarrollo mixto Cityzen con el Hotel Marriott en Heredia.
Experiencia comprobada en coordinación de múltiples equipos de trabajo, control de calidad, planificación estratégica y ejecución de acabados de alto nivel, así como en la gestión de proyectos bajo estándares internacionales en zonas francas y desarrollos de lujo.
          </p>
          <div className="buttons">
            <Link to="/proyectos" className="btn-primary">Ver todos los proyectos</Link>
           
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="projects">
        <div className="projects-header">
          <h3>Proyectos destacados</h3>
          
        </div>
        <div className="project-list">
          <div className="project-card">
            <img src={waldorfImg} alt="Hotel Waldorf Astoria" className="project-image" />
            <h4>Hotel Waldorf Astoria 7★</h4>
            <p className="meta">Hoteles • Guanacaste</p>
            <p className="desc">
              Hotel de lujo y villas exclusivas con acabados premium. Más de 10,500 m² construidos, incluyendo 11 piscinas y diseño de alta gama.
            </p>
          </div>
          <div className="project-card">
            <img src={cityenImg} alt="Cityzen" className="project-image" />
            <h4>Cityzen</h4>
            <p className="meta">Comercial • Heredia</p>
            <p className="desc">
              Complejo mixto con oficinas, residencias, hotel y áreas recreativas. Entrega exitosa de 147 habitaciones del Hotel Marriott.
            </p>
          </div>
          <div className="project-card">
            <img src={abottImg} alt="Abbott Medical" className="project-image" />
            <h4>Abbott Medical</h4>
            <p className="meta">Industria médica • Alajuela</p>
            <p className="desc">
              Obras industriales y remodelaciones especializadas en zona franca, incluyendo cuartos limpios y sistemas técnicos de alto estándar.
            </p>
          </div>
          <div className="project-card">
            <img src={esmeraldaImg} alt="Punta Esmeralda Torre 4" className="project-image" />
            <h4>Punta Esmeralda Torre 4 (En proceso)</h4>
            <p className="meta">Hoteles • Puntarenas</p>
            <p className="desc">
              Proyecto residencial de 20 pisos con 160 apartamentos. Fundaciones con más de 2200 m³ de concreto y logística de 250 camiones para su vaciado.
            </p>
          </div>
        </div>
      </section>

{/* Por qué trabajar conmigo */}
<section className="benefits">
  <h3>¿Por qué trabajar conmigo?</h3>
  <p>
    A lo largo de más de 5 años he liderado proyectos residenciales, hoteleros, industriales y comerciales de gran escala en Costa Rica, 
    siempre con un enfoque en calidad, cumplimiento y trabajo en equipo.  
    Mi experiencia abarca desde la coordinación de múltiples equipos de trabajo hasta la entrega de obras con acabados de alto nivel, 
    cumpliendo estándares internacionales.
  </p>
  <div className="benefits-list">
    <div className="benefit-card">
      <h4>📊 Gestión integral</h4>
      <p>Planificación, control de presupuesto y seguimiento de cronogramas para garantizar entregas puntuales y rentables.</p>
    </div>
    <div className="benefit-card">
      <h4>🤝 Relaciones sólidas</h4>
      <p>Comunicación efectiva con clientes, consultores y proveedores para mantener un ambiente de confianza y colaboración.</p>
    </div>
    <div className="benefit-card">
      <h4>🛠 Calidad y seguridad</h4>
      <p>Implementación de controles de calidad y estrictas medidas de seguridad ocupacional en todas las fases del proyecto.</p>
    </div>
    <div className="benefit-card">
      <h4>🏗 Experiencia diversa</h4>
      <p>Proyectos en zonas francas, hoteles de lujo y desarrollos residenciales de alto estándar.</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
