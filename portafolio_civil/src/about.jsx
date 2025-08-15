import React from "react";
import "./about.css";
import meImg from './assets/me.png'; // Imagen de perfil
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-wrapper">
      <section className="about-section">

        <div className="profile-container">
          <div className="profile-pic">
            <img src={meImg} alt="Foto del ingeniero" />
          </div>
          <div className="profile-info">
            <h1>Allan Ureña Bermúdez</h1>
            <p>
              Soy un ingeniero civil con amplia experiencia liderando proyectos de
              construcción en sectores hotelero, comercial, industria médica y
              desarrollos inmobiliarios. Me apasiona transformar planos en obras
              concretas, optimizando tiempos, costos y calidad.
            </p>
          </div>
        </div>

<div className="competencias-container">
  <h2>Competencias</h2>
  <ul>
    <li><strong>Liderazgo y gestión de equipos</strong> - experiencia coordinando y motivando a grupos de trabajo.</li>
    <li><strong>Planificación y organización</strong> - capacidad para estructura y ejecutar proyectos de manera eficiente.</li>
    <li><strong>Comunicación efectiva</strong> - habilidades claras y asertivas para transmitir ideas e información</li>
    <li><strong>Resolución de problemas</strong> - enfoque analítico y creativo para encontrar soluciones.</li>
    <li><strong>Adaptabilidad</strong> - habilidad para ajustarse a cambios y nuevos desafíos en entornos dinámicos.</li>
  </ul>
</div>


        <div className="experiencia-cards">
          <div className="card">
            <h3>+5 años</h3>
            <p>de experiencia</p>
          </div>
          <div className="card">
            <h3>+29 000 m²</h3>
            <p>de construcción</p>
           
          </div>
        </div>

        <div className="contactos">

          <a href="mailto:Ub.allan0610@hotmail.com">
            <FaEnvelope /> Ub.allan0610@hotmail.com
          </a>

          <a href="tel:+50688051567">
            <FaPhone /> +506 88051567
          </a>
        </div>
      </section>
    </div>
  );
}
