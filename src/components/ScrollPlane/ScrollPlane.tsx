import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AirplaneAnimation: React.FC = () => {
  const planeRef = useRef<SVGSVGElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const plane = planeRef.current;

    if (plane) {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

      // Animación GSAP adaptada
      gsap.to(plane, {
        scrollTrigger: {
          trigger: plane,
          start: "top center",
          end: "bottom top",
          scrub: true,
          onEnter: () => setShowText(true),
          onLeaveBack: () => setShowText(false),
        },
        x: isMobile ? "30vw" : isTablet ? "40vw" : "50vw", // Recorrido dinámico en X
        y: isMobile ? "20vh" : isTablet ? "30vh" : "50vh", // Recorrido dinámico en Y
        rotation: 40,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div className="mx-auto">
      <div className="relative w-full h-[95vh]">
        {/* SVG del avión */}
        <div>
          <svg
            ref={planeRef}
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58.064 58.064"
            xmlSpace="preserve"
            className="absolute w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[8vw]"
          >
            <polygon
              style={{ fill: "#3b82f6" }}
              points="17.064,31.032 58.064,10.032 24.064,35.032 44.064,48.032 58.064,10.032 0,22.032"
            />
            <polygon
              style={{ fill: "#3b82f6" }}
              points="24.064,35.032 20.127,48.032 17.064,31.032 58.064,10.032"
            />
            <polygon
              style={{ fill: "#3b82f6" }}
              points="24.064,35.032 20.064,48.032 31.912,40.133"
            />
          </svg>
        </div>
        {/* Texto mostrado dinámicamente */}
        {showText && (
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 sm:px-8  lg:px-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-4 text-center">
              La solución perfecta para tu equipo
            </h2>
            <p className="py-4 text-justify text-black text-sm sm:text-base md:text-lg lg:text-xl mb-20">
              En Planeo entendemos que cada proyecto es único, por eso ofrecemos un sistema
              flexible y personalizable para adaptarnos a tus necesidades. Nuestro objetivo es
              simplificar la gestión de tareas, eliminando la incertidumbre y permitiéndote
              concentrarte en lo que realmente importa. Con herramientas intuitivas, vistas
              personalizables e integración fluida con tus aplicaciones favoritas, Planeo
              transforma tus ideas en resultados tangibles, manteniendo a tu equipo alineado y
              motivado. ¡Lleva tus proyectos al siguiente nivel con Planeo!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirplaneAnimation;
