import { useState, useEffect } from "react";
import "./proyectos.css";
import w1 from './assets/waldorf/w1.JPG';
import w2 from './assets/waldorf/w2.JPG';
import w3 from './assets/waldorf/w3.JPG';
import w4 from './assets/waldorf/w4.JPG';
import w5 from './assets/waldorf/w5.jpeg';

import a1 from './assets/abbott/a1.jpeg';
import a2 from './assets/abbott/a2.jpeg';
import a3 from './assets/abbott/a3.jpeg';
import a4 from './assets/abbott/a4.jpeg';
import a5 from './assets/abbott/a5.jpeg';

import o1 from './assets/orchid/o1.jpeg';
import o2 from './assets/orchid/o2.jpeg';

import c1 from './assets/cityzen/c1.jpeg';
import c2 from './assets/cityzen/c2.jpeg';
import c3 from './assets/cityzen/c3.jpeg';
import c4 from './assets/cityzen/c4.JPG';
import c5 from './assets/cityzen/c5.jpeg';

import e1 from './assets/esmeralda/e1.jpg';
import e2 from './assets/esmeralda/e2.jpg';
import e3 from './assets/esmeralda/e3.jpg';

export default function Proyectos() {
  const [filtro, setFiltro] = useState("Todos");
  const [modalData, setModalData] = useState(null);

  const timeline = [
    {
      fecha: "Nov 2020 - Dic 2020",
      ubicacion: "Cartago",
      puesto: "Orchid Shell - Ingeniero de calidad ",
      descripcion: "Primer proyecto como Ingeniero de Calidad, controlando procesos y pruebas en la superficie de soporte para la construcción de una planta médica industrial en Cartago."
    },
    {
      fecha: "Dic 2020 - Jul 2022",
      ubicacion: "Heredia",
      puesto: "Cityzen - Ingeniero de calidad",
      descripcion: "Ingeniero de calidad y luego residente responsable de entregar 147 habitaciones del Hotel Marriott en Belén, con énfasis en calidad, trabajo en equipo y satisfacción del cliente en un complejo mixto."
    },
    {
      fecha: "Ago 2022 - Abr 2023",
      ubicacion: "Alajuela",
      puesto: "Abbott Medical - Ingeniero residente ",
      descripcion: "Ingeniero residente en proyectos varios dentro de zona franca, incluyendo parqueo, remodelación de oficinas y cuartos limpios con sistemas especializados, enfocado en seguridad y planificación."
    },
    {
      fecha: "May 2023 - May 2025",
      ubicacion: "Guanacaste",
      puesto: "Waldorf Astoria - Ingeniero residente ",
      descripcion: "Ingeniero residente en obra gris de dos hoteles Hilton y responsable del inicio de 5 casas de ultra lujo con acabados exclusivos y tecnología avanzada, abarcando más de 10,500 m² y 11 piscinas."
    },
    {
      fecha: "Jun 2025 - Actualidad",
      ubicacion: "Puntarenas",
      puesto: " Punta Esmeralda Torre 4 - Ingeniero residente",
      descripcion: "Proyecto residencial en Jacó con 20 pisos y 160 apartamentos. Actualmente en construcción con colado del primer piso y una gran placa de fundación de más de 2200 m³ de concreto."
    }
  ];

  const sectores = ["Todos", "Hoteles", "Comercial", "Industria médica", "Desarrollos inmobiliarios"];

  const portafolio = [
    {
      nombre: "Punta Esmeralda Torre 4",
      rol: "Ingeniero Residente",
      sector: "Desarrollos inmobiliarios",
      imagenes: [e1, e2, e3],
      detalle: "Es un proyecto residencial ubicado en la zona de Jacó, Puntarenas.\n\n" +
        "Este proyecto se encuentra en proceso de construcción, actualmente nos encontramos colando el primer piso de muros y entrepisos..."
    },
    {
      nombre: "Waldorf Astoria Costa Rica",
      rol: "Ingeniero Residente",
      sector: "Hoteles",
      imagenes: [w5, w2, w3, w4, w1],
      detalle: "Waldorf Astoria en Punta Cacique, Sardinal, Guanacaste es un hotel de lujo de la cadena Hilton..."
    },
    {
      nombre: "Abbott Medical",
      rol: "Ingeniero Residente",
      sector: "Industria médica",
      imagenes: [a5, a2, a3, a4, a1],
      detalle: "Considero que este proyecto fue un punto de inflexión positivo en cuanto a mi experiencia laboral..."
    },
    {
      nombre: "Orchid Shell",
      rol: "Ingeniero de Calidad",
      sector: "Industria médica",
      imagenes: [o1, o2],
      detalle: "Orchid Shell fue mi primer proyecto oficial en Edificar..."
    },
    {
      nombre: "Cityzen",
      rol: "Ingeniero de Calidad / Residente",
      sector: "Comercial",
      imagenes: [c2, c5, c4, c3, c1],
      detalle: "Es un epicentro laboral y social del cantón de Belén en Heredia, Costa Rica..."
    }
  ];

  const proyectosFiltrados =
    filtro === "Todos" ? portafolio : portafolio.filter(p => p.sector === filtro);

  return (
    <div className="proyectos-container">
      <h2>Proyectos</h2>
      <p>Línea del tiempo de experiencia y portafolio por sector.</p>

      {/* Línea del tiempo */}
      <h3>Línea del tiempo</h3>
      <div className="timeline-horizontal">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-event">
            <div className="event-card">
              <h4>{item.puesto}</h4>
              <p>{item.descripcion}</p>
            </div>
            <div className="marker">
              <span className="fecha">{item.fecha}</span>
              <span className="ubicacion">{item.ubicacion}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Filtros */}
      <h3>Portafolio por sector</h3>
      <div className="filtros">
        {sectores.map((sector, i) => (
          <button
            key={i}
            className={filtro === sector ? "activo" : ""}
            onClick={() => setFiltro(sector)}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid">
        {proyectosFiltrados.map((item, i) => (
          <CardProyecto key={i} data={item} onVerMas={() => setModalData(item)} />
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>{modalData.nombre}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{modalData.detalle}</p>
            <button onClick={() => setModalData(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CardProyecto({ data, onVerMas }) {
  const [indexImg, setIndexImg] = useState(0);

  const nextImg = () => {
    setIndexImg(prev => (prev + 1) % data.imagenes.length);
  };

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 3000);
    return () => clearInterval(interval);
  }, [data.imagenes.length]);

  return (
    <div className="card">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${indexImg * 100}%)`
          }}
        >
          {data.imagenes.map((img, i) => (
            <img key={i} src={img} alt={`${data.nombre} ${i + 1}`} />
          ))}
        </div>
      </div>
      <h4>{data.nombre}</h4>
      <p>{data.rol}</p>
      <span className="etiqueta">{data.sector}</span>
      <button className="ver-mas" onClick={onVerMas}>Ver más</button>
    </div>
  );
}
