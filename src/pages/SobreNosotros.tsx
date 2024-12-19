import {
  Header,
  Footer,
} from '../components';
import PlaneAndClouds from "../components/PlaneAndClounds";
import CardGrid from '../components/CardGrid';
import PlaneAnimation from "../components/PlaneAnimation";
import SectionAbout from "../components/Section/SectionAbout";
import Technologies from '../components/Technologies';

import Salesforce from '../assets/Salesforcelogo.png';
import fundacioEsplai from '../assets/logo-fundacion-esplai.png';
import team from '../assets/team.svg';

function SobreNosotros() {
  const h2Styles = 'text-3xl font-bold text-gray-800';
  const pStyles = 'mt-4 text-lg text-gray-600 text-justify';

  return (
    <div>
      <Header />
      <PlaneAndClouds />
      <div>
        <SectionAbout
          title="Quiénes somos"
          text="Planeo es una herramienta de gestión de tareas desarrollada como parte de un proyecto de curso
            durante el bootcamp de la Fundació Esplai, subvencionado por Salesforce. El objetivo de nuestra
            plataforma es ayudar a las personas a organizar su día a día, gestionar sus tareas de manera eficiente
            y alcanzar sus metas con facilidad. Con Planeo, queremos que la productividad sea más accesible para todos."
          imageSrc={[fundacioEsplai, Salesforce]}
          imageAlt={["Logo de Fundació Esplai", "Logo de Salesforce"]}
          imageLinks={["https://fundacionesplai.org/", "https://www.salesforce.com/es/"]} 
          imageClasses={[
           "w-full h-48 sm:h-20 md:h-64 lg:h-72 object-contain rounded-2xl shadow-lg", // Clases para Fundació Esplai
            "w-full h-48 sm:h-20 md:h-64 lg:h-72 object-contain rounded-2xl shadow-lg", // Clases para Salesforce
          ]}
          animation="fade-up"
        />

        <SectionAbout
          title="El origen de Planeo"
          text="Planeo nació en el contexto de un bootcamp intensivo de desarrollo web, organizado por la Fundació Esplai
            con el apoyo de Salesforce. Durante este programa, un equipo de estudiantes dedicados trabajó con el objetivo
            de crear una herramienta que pudiera transformar la manera en que las personas gestionan sus tareas diarias.
            A lo largo de este proceso, aprendimos no solo sobre tecnología, sino también sobre la importancia de crear
            soluciones simples y efectivas para problemas cotidianos. Gracias al apoyo de Salesforce, contamos con herramientas
            avanzadas y recursos tecnológicos que nos permitieron llevar nuestro proyecto al siguiente nivel. Este respaldo
            ha sido fundamental para crear una plataforma de calidad, que es escalable y confiable para nuestros usuarios."
          imageSrc={[team]}
          imageAlt={["Equipo Planeo"]}
          imageFirst={true}
          animation="fade-up"
        />
      </div>

      <div>
        <div className="mx-20 mt-20" data-aos="fade-up">
          <h2 className={h2Styles}>Tecnologías aplicadas</h2>
          <p className={pStyles}>
          Como parte de nuestro proyecto en el bootcamp, hemos integrado las mejores prácticas y herramientas tecnológicas para ofrecer una experiencia web de alto nivel en la gestión de tareas. Nuestro desarrollo se basa en una arquitectura moderna, combinando un enfoque sólido tanto en el front-end como en el back-end. Esto nos ha permitido crear una solución integral, eficiente y completamente optimizada, diseñada para satisfacer las necesidades de nuestros usuarios. A lo largo del proceso, hemos aprendido a implementar tecnologías avanzadas y a enfocarnos en la usabilidad, lo que nos ha permitido ofrecer una plataforma robusta y flexible que facilita la organización, gestiona eficazmente las tareas y mejora la productividad. Este proyecto refleja nuestro aprendizaje y esfuerzo por aplicar los conocimientos adquiridos durante el bootcamp.
          </p>
        </div>
        <Technologies/>   
      </div>

      <div className='rounded-'>

      </div>

      <PlaneAnimation />
      <div className="mx-auto pb-20 bg-sky-400">

        <div className="mx-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white">Nuestro equipo</h2>
          <p className="mt-4 text-lg text-white text-justify">
          Somos un grupo de estudiantes del bootcamp de la Fundació Esplai, con pasión por la tecnología y la productividad. Durante el curso, hemos adquirido habilidades en desarrollo web, especializándonos en tecnologías como React y JavaScript. Para este proyecto, nos enfocamos en el desarrollo tanto del frontend como del backend utilizando Node.js, creando una solución completa y funcional. La colaboración con la Fundació Esplai nos brindó la guía y el apoyo necesarios para llevar a cabo este proyecto. Además, este bootcamp nos enseñó a trabajar en equipo y a resolver los desafíos propios del desarrollo de productos reales.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-8 mx-10 my-5">
          <CardGrid
            title="Roger"
            subtitle="Frontend"
            content="¡Hola! Soy Roger y siempre he tenido una mentalidad enfocada en resolver problemas. Durante mis dos años de experiencia como desarrollador, me he especializado en el backend. Aunque es mi zona de confort, también disfruto comprendiendo cómo encajan todas las piezas del sistema. Esto me permite colaborar de manera fluida con compañeros de frontend y otras áreas, facilitando una mejor integración del proyecto.
                      Últimamente, he descubierto que mis habilidades de comunicación y mi enfoque resolutivo pueden aportar aún más en roles de liderazgo. Estoy entusiasmado por asumir nuevos desafíos donde pueda combinar estas habilidades para guiar equipos y proyectos hacia el éxito."
            buttonText={<a href="https://www.linkedin.com/" >LinkedIn</a>}
            backgroundColor="bg-green-300"
            hoverEffect
          />
          <CardGrid
            title="Lautaro"
            subtitle="Full Stack Developer"
            content="Soy un Full Stack Developer especializado en JavaScript con experiencia en React, Node.js y TypeScript. Apasionado por escribir código limpio, legible y escalable, siempre busco implementar soluciones que sean mantenibles a largo plazo. Creo firmemente en la importancia de los tests, por lo que aplico herramientas como Jest y Cypress para garantizar la calidad del software. Me motiva trabajar en proyectos desafiantes que requieren creatividad y eficiencia. Además, disfruto colaborar con equipos ágiles, priorizando la comunicación efectiva y las buenas prácticas de desarrollo. Siempre estoy aprendiendo nuevas tecnologías para seguir creciendo profesionalmente."
            buttonText={<a href="https://www.linkedin.com/" >LinkedIn</a>}
            backgroundColor="bg-blue-300"
            hoverEffect
          />
          <CardGrid
            title="Carmen"
            subtitle="Front-end | Diseño web"
            content="¡Hola! Soy Carmen, una apasionada creativa que ha dado un giro emocionante en su vida hacia el mundo de la programación. Con experiencia en desarrollo front-end y nociones de back-end, combino mi amor por el arte y el diseño con habilidades técnicas para crear webs atractivas y funcionales. Me motiva aprender constantemente y aportar una perspectiva fresca a cada proyecto. ¡Si quieres saber más de mi aqui tienes mi LinkedIn!"
            buttonText={<a href="https://www.linkedin.com/in/carmenamez/" >LinkedIn</a>}
            backgroundColor="bg-pink-300"
            hoverEffect
          />
          <CardGrid
            title="Gisela"
            subtitle="Front-end | Diseño web"
            content="Soy Gisela Carballo, desarrolladora front-end con nociones de back-end y una formación en Historia del Arte, lo que me permite combinar habilidades técnicas con una sensibilidad estética única. Tengo experiencia en diseño de interfaces funcionales, optimización SEO, accesibilidad web y redacción de contenido persuasivo. Apasionada por la creatividad, la innovación y el aprendizaje continuo, busco aportar soluciones que conecten a las marcas con sus audiencias y generen resultados impactantes."
            backgroundColor="bg-yellow-300"
            buttonText={<a href="https://www.linkedin.com/in/gisela-carballo-urquidi" >LinkedIn</a>}
            hoverEffect={true} 
          />
        </div>

      </div>

      <div className="px-8 py-32 mb-24" data-aos="fade-up">
        <div className="mx-20">
          <h2 className={h2Styles}>Agradecimientos</h2>
          <p className={pStyles}>
          Queremos expresar nuestro más sincero agradecimiento a la Fundació Esplai por brindarnos la oportunidad de participar en este bootcamp. Este programa no solo nos permitió adquirir conocimientos técnicos, sino también desarrollar habilidades clave como el trabajo en equipo, la resolución de problemas y la gestión de proyectos, fundamentales para la creación de Planeo.
          También extendemos nuestra gratitud a Salesforce por su generoso apoyo y compromiso con la formación tecnológica y el empoderamiento de las nuevas generaciones. Su subvención no solo hizo posible el desarrollo de Planeo, sino que también nos permitió contar con recursos y herramientas que elevaron la calidad del proyecto.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SobreNosotros;
