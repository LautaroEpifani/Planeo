import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AdvancedPlaneAnimation: React.FC = () => {
  useEffect(() => {
    const planeBody = document.querySelector('.plane-body') as SVGElement;
    const shadow = document.querySelector('.shadow') as SVGElement;
    const lines = Array.from(document.querySelectorAll('.line')) as SVGElement[];

    const planeTl = gsap.timeline({
      repeat: -1, // Animación infinita
    });

    // Animación del cuerpo del avión y su sombra
    planeTl
      .to(planeBody, {
        duration: 1.5,
        y: 65,
        ease: 'none',
      })
      .to(
        shadow,
        {
          duration: 1.5,
          scale: 1.2,
          transformOrigin: 'center center',
          ease: 'none',
        },
        0
      )
      .to(
        planeBody,
        {
          duration: 2.5,
          y: 0,
          ease: 'power2.out',
        },
        1.5
      )
      .to(
        shadow,
        {
          duration: 2.5,
          scale: 1,
          transformOrigin: 'center center',
          ease: 'power2.out',
        },
        1.5
      );

    // Animación de las líneas
    lines.forEach((line) => {
      planeTl.to(
        line,
        {
          duration: 4,
          attr: { 'stroke-dashoffset': 0 },
          ease: 'none',
        },
        0
      );
    });
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 100 2100 1000"
        className="w-full h-auto max-w-xs md:max-w-lg aspect-[16/9]"
      >
        <g fill="none" stroke="#674C99" strokeWidth="15" strokeLinecap="round">
          <line
            className="line"
            strokeDashoffset="5208.54"
            strokeDasharray="0 500 150 1150 200 604.27"
            x1="2723"
            y1="-83"
            x2="816.3"
            y2="1690.9"
          />
          <line
            className="line"
            strokeDashoffset="5372.94"
            strokeDasharray="300 1000 200 1186.4"
            x1="2448.3"
            y1="-94.4"
            x2="408.9"
            y2="1654.3"
          />
          <line
            className="line"
            strokeDashoffset="5628.66"
            strokeDasharray="200 1214.33 300 1100"
            x1="2187.4"
            y1="-87.6"
            x2="-38.7"
            y2="1634.3"
          />
          <line
            className="line"
            strokeDashoffset="5843.54"
            strokeDasharray="10 490 100 1321.77 400 600"
            x1="1978.6"
            y1="-87.8"
            x2="-379.6"
            y2="1637.2"
          />
        </g>
        <path
          className="shadow"
          fill="#674C99"
          d="M1528,665l-221.8,141c-2,1-2,5,0,7l120,60c2,1,4.6,0,5-1l101-201.2C1536.1,667,1531.7,663.1,1528,665z"
        />
        <g className="plane-body">
          <path
            fill="#56C2FF"
            d="M1131,516.3l297-38c3,0,5.6,4,2,6l-133,97c0,0-2,0.9-3,0l-163-58C1127,522,1127,516,1131,516.3z"
          />
          <path
            fill="#6B6BD9"
            d="M1689,302l-349,423c-2,2.9-7,1-8-1l-40-138c0-1,0-3,1-5l390-284C1687,291,1692,297,1689,302z"
          />
          <path
            fill="#9A9AE3"
            d="M1336,603.7l-2,119c0,2,3,4,5,1l349-423c2-2-1-6.7-4-4l-347,303C1336.6,602,1336,602,1336,603.7z"
          />
          <path
            fill="#8FECFF"
            d="M1132,514l564-234c2,0,3,2,1,3l-266,195.8c0,0-0.6,0,0,0l-297,38C1130,518,1130,515,1132,514z"
          />
          <path
            fill="#CDB3FF"
            d="M1705,279l-241,211.9c-1,0-1,2-0.7,3l116,239c1,2,4,2,5,0l124-451C1710,279,1707,277.8,1705,279z"
          />
          <path
            fill="#AD81FF"
            d="M1341,597l120-104c1-1,3,0,4,0l115.8,238c1,2-1,4-3,3l-236-133c-4.8,2-4.8,0-3.8-2L1341,597z"
          />
        </g>
      </svg>
    </div>
  );
  
    
};

export default AdvancedPlaneAnimation;
