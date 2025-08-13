import { useState } from "react";
import "./Proyectos.css";
import w1 from './assets/waldorf/w1.jpg';
import w2 from './assets/waldorf/w2.jpg';
import w3 from './assets/waldorf/w3.jpg';
import w4 from './assets/waldorf/w4.jpg';
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
import c4 from './assets/cityzen/c4.jpg';
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
    imagenes: [
   e1, e2, e3
    ],
    detalle: "Es un proyecto residencial ubicado en la zona de Jacó, Puntarenas.\n\n" +
"Este proyecto se encuentra en proceso de construcción, actualmente nos encontramos colando el primer piso de muros y entrepisos. El edificio cuenta con una impresionante placa de fundación de más de 2200 m3 de concreto, que requirió una logística y planificación precisa para poder colocar los más de 250 camiones de concreto que se necesitaron para colarla.\n\n" +
"Torre 4 es un edificio de 20 pisos de altura, que va a contar con 160 apartamentos residenciales. En este caso el cliente se llama MetaKapitales."
  },
  {
    nombre: "Waldorf Astoria Costa Rica",
    rol: "Ingeniero Residente",
    sector: "Hoteles",
    imagenes: [
      w5, w2, w3, w4, w1
    ],
detalle: "Waldorf Astoria en Punta Cacique, Sardinal, Guanacaste es un hotel de lujo de la cadena Hilton.\n" +
"Tras el éxito y la experiencia en Abbott Medical me correspondió ser ingeniero residente de este proyecto tan emblemático para la zona de Guanacaste y para Costa Rica.\n" +
"En este proyecto estuve en la obra gris de dos de los hoteles principales Hotel H10 y Hotel H09. En esta obra gris se colocaron más de 3000 m3 de concreto y se colocaron más de 200 000 kilogramos de acero, todo esto para un total de más de 6500 metros cuadrados de construcción.\n\n" +
"Una vez finalizada esa obra gris, fui el responsable de iniciar los proyectos de las casas de ultra lujo del Waldorf Astoria, en total eran 5 casas: Casa 05, Casa 08, Pacífico Suite, Duplex Suite y Presidencial Suite. Estos proyectos me aportaron experiencia valiosa tanto en el manejo de 5 equipos de trabajo diferentes, como en el aprendizaje de construcción con mampostería confinada. Además, los acabados que estas casas tenían eran particulares entre los cuales se pueden mencionar: sistemas de control de iluminación, piscinas de lujo, acabados con madera española, estructura de techo steel framing, cubiertas de vidrio, escaleras de madera, espejos de agua enchapados en mármol, fire pits, pisos italianos y acabados en paredes y cielos con chukum.\n\n" +
"En total, las 5 casas me aportaron un área de construcción de más de 10500 metros cuadrados. Las casas además contaron con 11 piscinas, 9 habitaciones King, 4 habitaciones Queen y 1 Suite Presidencial."


  },


  {
    nombre: "Abbott Medical",
    rol: "Ingeniero Residente",
    sector: "Industria médica",
    imagenes: [a5, a2, a3, a4, a1],
   
    detalle: "Considero que este proyecto fue un punto de inflexión positivo en cuanto a mi experiencia laboral.\n\n" +
"En Abbott fui ingeniero residente de proyectos varios tales como: un parqueo para 60 vehículos y 20 motocicletas (más de 2100 m2), una remodelación de oficinas con estructura metálica en entrecielos (más de 1240 m2) y la construcción de un cuarto limpio sobre un mezzanine (más de 2510 m2). Fue una experiencia particular e importante porque en este tipo de proyectos en zona franca hay que pensar muy bien y sacar tiempo para planificar los proyectos para así reducir riesgos tanto en seguridad ocupacional como las afectaciones a la planta ya en operación.\n\n" +
"Además, los cuartos limpios tienen sistemas y acabados muy específicos y particulares (aire comprimido, salas de gowning, pisos epóxicos y con hojuelas, paredes ducto, manejadoras de aire acondicionado, pasarela metálica de entrecielo, salidas de extracción de aire, etc) que fueron muy valiosas para mi crecimiento personal y profesional."

  },
  {
    nombre: "Orchid Shell",
    rol: "Ingeniero de Calidad",
    sector: "Industria médica",
    imagenes: [o1, o2],
    detalle: "Orchid Shell fue mi primer proyecto oficial en Edificar. Este proyecto fue la construcción de una planta médica industrial en la zona franca de La Lima en Cartago, Costa Rica.\n\n" +
"En este proyecto ingresé como Ingeniero de Calidad responsable de controlar y llevar todos los procesos y pruebas en la superficie de soporte del contrapiso. Este proyecto se fundó en columnas de grava y a parte se tuvo que hacer una sustitución de suelo para poder colar el contrapiso."
  },
  {
    nombre: "Cityzen",
    rol: "Ingeniero de Calidad / Residente",
    sector: "Comercial",
    imagenes: [
   c2, c5, c4, c3, c1
    ],
    detalle: "Es un epicentro laboral y social del cantón de Belén en Heredia, Costa Rica.\n\n" +
"En este proyecto inicié como ingeniero de calidad, proveniente del proyecto Orchid en Cartago.\n\n" +
"Entre otras funciones realizaba inspecciones de calidad en todo el desarrollo (1 Edificio de Oficinas de 5 niveles con entrepisos postensados, un edificio de Residencias con 5 niveles, una plaza gastronómica, gimnasio, terraza, piscina, bar y el Hotel Marriott). Siempre con el enfoque de hacer las cosas bien, la primera vez y todas las veces.\n\n" +
"Luego en este proyecto logré obtener mi primera responsabilidad como Ingeniero Residente de Edificar, era el encargado de alistar y entregar al cliente las 147 habitaciones del Hotel Marriott, siempre con el enfoque de trabajo en equipo promoviendo un sentimiento de equipo y buena relación entre el consultor, cliente, proveedores y nosotros como constructora.\n\n" +
"Estas habitaciones y pasillos contabilizan más de 5600 m2 de construcción y fueron mi primer entrega exitosa a un cliente importante y exigente como Marriott."
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
            <p style={{ whiteSpace: "pre-line" }}>{modalData.detalle}</p>  {/* Aquí */}
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

  const prevImg = () => {
    setIndexImg(prev => (prev - 1 + data.imagenes.length) % data.imagenes.length);
  };

  return (
    <div className="card">
      <div className="carousel">
        <img src={data.imagenes[indexImg]} alt={data.nombre} />
        {data.imagenes.length > 1 && (
          <>
            <button className="prev" onClick={prevImg}>❮</button>
            <button className="next" onClick={nextImg}>❯</button>
          </>
        )}
      </div>
      <h4>{data.nombre}</h4>
      <p>{data.rol}</p>
      <span className="etiqueta">{data.sector}</span>
      <button className="ver-mas" onClick={onVerMas}>Ver más</button>
    </div>
  );
}
