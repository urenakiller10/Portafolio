import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      {/* Barra de navegación */}
      <header className="navbar">
        <div className="logo">Portafolio</div>
        <nav>
          <a href="#about">Acerca de mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contactos</a>
        </nav>
      </header>

      {/* Sección de información */}
      <section className="about-section">
        <div className="profile-pic">
          <img
            src="/ruta/a/tu-imagen.jpg"
            alt="Foto del ingeniero"
          />
        </div>
        <div className="profile-info">
          <h1>Nombre del Ingeniero</h1>
          <h3>Ingeniero Civil - Dirección y Gestión de Proyectos</h3>
          <p>
            Soy un ingeniero civil con amplia experiencia liderando proyectos de
            construcción en sectores hotelero, comercial, industria médica y
            desarrollos inmobiliarios. Me apasiona transformar planos en obras
            concretas, optimizando tiempos, costos y calidad.
          </p>
        </div>
      </section>
    </div>
  );
}
