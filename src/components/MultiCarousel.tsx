import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaClipboardList } from 'react-icons/fa';
import { MdAccessTimeFilled, MdFlashOn } from 'react-icons/md';
import { VscGraphLine } from 'react-icons/vsc';
import { BsFillPaletteFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa6';
import { Cards } from '../components';

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // por ejemplo, más de 3000px
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      containerClass=" py-20"
      itemClass="flex justify-center items-center gap-4" // Centra cada card
    >
      <Cards
        bgColor="bg-teal-400"
        icon={<FaClipboardList size={50} color="#2dd4bf" />}
        title="Organiza tus ideas con claridad"
        description="Con Planeo, puedes estructurar todas tus ideas y tareas en un solo lugar. Olvídate de las listas desordenadas: aquí tendrás una vista clara de todo lo que necesitas hacer para avanzar en cada proyecto."
      />

      <Cards
        bgColor="bg-purple-400"
        icon={<MdAccessTimeFilled size={50} color="#c084fc" />}
        title="Reuniones productivas"
        description="Haz que tus reuniones sean rápidas y eficaces. Con Planeo, los temas importantes están al alcance de todos para que cada sesión sea directa, clara y, por qué no, agradable. Asegura que cada minuto cuente!"
      />
      <Cards
        bgColor="bg-blue-400"
        icon={<FaHandshake size={50} color="#60a5fa" />}
        title="Integración de equipo"
        description="Incorporar nuevos miembros a tu proyecto es sencillo y ordenado. Con una interfaz intuitiva, Planeo facilita que todos comprendan su rol y contribuyan desde el primer día. Un equipo bien integrado es un equipo exitoso."
      />

      <Cards
        bgColor="bg-teal-400"
        icon={<VscGraphLine size={50} color="#2dd4bf" />}
        title="Progreso en tiempo real"
        description="Haz que tus reuniones sean rápidas y eficaces. Con Planeo, los temas importantes están al alcance de todos para que cada sesión sea directa, clara y, por qué no, agradable.Organiza tu agenda con facilidad y asegura que cada minuto cuente, manteniendo a todos enfocados y alineados."
      />

      <Cards
        bgColor="bg-purple-400"
        icon={<MdFlashOn size={50} color="#c084fc" />}
        title="Automatización que simplifica"
        description=" Libérate de las tareas repetitivas con nuestras funciones de automatización. Configura acciones automáticas y permite que Planeo haga el trabajo tedioso por ti, para que puedas concentrarte en lo que realmente importa."
      />
      <Cards
        bgColor="bg-blue-400"
        icon={<BsFillPaletteFill size={50} color="#60a5fa" />}
        title="Personalización a tu medida"
        description="Planeo se adapta a tus necesidades. Personaliza los tableros, colores y etiquetas según el estilo de tu proyecto. Desde grandes desafíos hasta tareas diarias, construye el entorno perfecto para tus objetivos."
      />
    </Carousel>
  );
};

export default MultiCarousel;
