import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiZod } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiDrizzle } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import SectionTechnologies from "../components/Section/SectionTechnologies";

const frontEndApps = [
  { 
    name: "HTML", 
    description: 
      "Utilizamos HTML para crear la estructura básica y semántica de nuestras páginas, garantizando una correcta accesibilidad y organización." 
  },
  { name: "CSS Moduls", 
    description: 
      "Implementamos CSS Modules para estilizar nuestros componentes de forma modular y aislada, mejorando la mantenibilidad y evitando conflictos de estilos." 
  },
  { name: "Tailwind", 
    description: 
      "Usamos Tailwind CSS para diseñar de manera rápida y eficiente, aprovechando su sistema de utilidades para crear interfaces personalizadas y responsivas." 
  },
  { name: "React", 
    description: 
      "React fue la base para construir nuestra interfaz interactiva, permitiéndonos desarrollar una experiencia de usuario dinámica y eficiente en la gestión de tareas." 
  },
  { name: "Zod", 
    description: 
    "Implementamos Zod para validar y asegurar la correcta estructura de los datos en nuestro sistema, mejorando la fiabilidad y la seguridad de la aplicación." 
  }
];

const backEndApps = [
  { 
    name: "Node.js", 
    description: 
      "Utilizamos Node.js para construir el servidor, lo que nos permitió aprovechar su rendimiento y escalabilidad para gestionar múltiples peticiones simultáneas de manera eficiente." 
  },
  { name: "Express", 
    description: 
      "Implementamos Express para gestionar las rutas y peticiones HTTP, simplificando la creación de un servidor robusto y escalable para nuestra aplicación." 
  },
  { name: "Zod", 
    description: 
      "Usamos Zod para validar los datos entrantes, garantizando que la información procesada en el servidor cumpla con los esquemas y sea segura." 
  },
  { name: "Drizzle", 
    description: 
      "Integramos Drizzle como una capa de interacción con la base de datos, lo que facilita el acceso a la información de manera eficiente y segura." 
  },
  { name: "JsonWebToken", 
    description: 
      "Implementamos JsonWebToken (JWT) para manejar la autenticación de usuarios de forma segura, garantizando la protección de las sesiones." 
  },
  { name: "Cookies", 
    description: 
    "Utilizamos cookies para gestionar las sesiones de usuario de forma segura, permitiendo mantener la autenticación a través de peticiones posteriores." 
  }
];

const databaseApps = [
  { name: "PostgreSQL", 
    description: 
      "Utilizamos PostgreSQL como base de datos relacional para almacenar de manera estructurada y segura la información de los usuarios y sus tareas, aprovechando su robustez y capacidad para manejar grandes volúmenes de datos." 
  },
];

// Definición del componente Technologies
const Technologies: React.FC = () => {
  const JWT = (
    <svg height="120" viewBox=".4 .3 99.7 100" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m57.8 27.2-.1-26.9h-15l.1 26.9 7.5 10.3zm-15 46.1v27h15v-27l-7.5-10.3z" fill="#f8f1f1"/><path d="m57.8 73.3 15.8 21.8 12.1-8.8-15.8-21.8-12.1-3.9zm-15-46.1-15.9-21.8-12.1 8.8 15.8 21.8 12.2 3.9z" fill="#00f2e6"/><path d="m30.6 36-25.6-8.3-4.6 14.2 25.6 8.4 12.1-4zm31.8 18.2 7.5 10.3 25.6 8.3 4.6-14.2-25.6-8.3z" fill="#00b9f1"/><path d="m74.5 50.3 25.6-8.4-4.6-14.2-25.6 8.3-7.5 10.3zm-48.5 0-25.6 8.3 4.6 14.2 25.6-8.3 7.5-10.3z" fill="#d63aff"/><path d="m30.6 64.5-15.8 21.8 12.1 8.8 15.9-21.8v-12.7zm39.3-28.5 15.8-21.8-12.1-8.8-15.8 21.8v12.7z" fill="#fb015b"/></g></svg>
  );
  const express= (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="144px" height="144px" baseProfile="basic"><path fill="#000000" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"/><path fill="#000000" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"/></svg>
  );
  const frontEndIcons = [
  
    { 
      Icon: <TiHtml5 />, 
      color: "#fb923c", 
      size: 140 
    },
    { 
      Icon: <SiTypescript />, 
      color: "#65a1f0", 
      size: 95, 
      link:'https://www.typescriptlang.org/'
    },
    { 
      Icon: <FaReact />, 
      color: "#65a1f0", 
      size: 100,
      link:"https://es.react.dev/" 
    },
    { Icon: <RiTailwindCssFill />, 
      color: "#143c70", 
      size: 100, 
      link:'https://tailwindcss.com/'
    },
    { 
      Icon: <SiZod />, 
      color: "#5a1792", 
      size: 130,
      link:'https://zod.dev/'
    },
  ];
  const backEndIcons = [
    { 
      Icon: <FaNode />, 
      color: "#24a05c", 
      size: 130,
      link:'https://nodejs.org/en/'
    }, 
    { 
      Icon: <SiZod />, 
      color: "#5a1792", 
      size: 130,
      link:'https://zod.dev/'
    },
    { 
      Icon: <SiDrizzle/>, 
      color: "#1aa82d", 
      size: 130,
      link:'https://orm.drizzle.team/'
    }, 
    {
      Icon: JWT, //  SVG 
      color: "#000000",
      size: 70,
    },
    {
      Icon: express, //  SVG 
      color: "#000000",
      size: 70,
    },
  ];
  
  const databaseIcons = [
    { 
      Icon: <BiLogoPostgresql  />, 
      color: "#2719a5", 
      size: 130,
      link:'https://www.postgresql.org/'
    }, 
  ];
  return (
    <div>
      {/* Sección Front-End */}
      <SectionTechnologies
        title="Front-End"
        description="En la interfaz de usuario, utilizamos tecnologías modernas para crear una experiencia visualmente atractiva, interactiva y adaptable a cualquier dispositivo."
        icons={frontEndIcons}
        apps={frontEndApps}
        imageFirst={false}
        animation="fade-up"
      />

      {/* Sección Back-End */}
      <SectionTechnologies
        title="Back-End"
        description="En el lado del servidor, garantizamos un funcionamiento robusto y seguro mediante tecnologías que respaldan un rendimiento escalable y confiable."
        icons={backEndIcons}
        apps={backEndApps}
        imageFirst={true}
        animation="fade-up"
      />

      {/* Sección Bases de Datos */}
      <SectionTechnologies
        title="Bases de Datos"
        description="En el núcleo de nuestro back-end, integramos sistemas de bases de datos robustos y versátiles que garantizan un manejo eficiente de la información."
        icons={databaseIcons}
        apps={databaseApps}
        imageFirst={false}
        animation="fade-up"
      />
    </div>
  );
};

export default Technologies;
