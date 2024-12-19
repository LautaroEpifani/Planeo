import React from "react";

interface IconCarouselProps {
  Icon: React.ReactNode; // El componente ícono o SVG que se pasará.
  color: string; // Color del ícono.
  size: number; // Tamaño del ícono en píxeles.
  link?: string; // Enlace opcional que rodeará el ícono.
}

const IconCarousel: React.FC<IconCarouselProps> = ({ Icon, color, size, link }) => {
  const iconContent = (
    <div
      style={{ color: color, fontSize: `${size}px` }}
      className="icon-content"
    >
      {Icon}
    </div>
  );

  return (
    <div className="logo-wrapper hover-effect">
      <svg
        className="logo-rotate"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo principal */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={color}
          strokeWidth="8"
        />
        {/* Círculo interno negro */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="none"
          strokeWidth="5"
        />
        {/* Path decorativo */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeDasharray="50 15"
          strokeLinecap="round"
          className="circle-decoration"
        />
      </svg>

      {/* Contenido central (ícono) */} 
        <div className="logo-center ">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {iconContent}
            </a>
          ) : (
            iconContent
          )}
        </div>
    </div>
  );
};

export default IconCarousel;
