import React from 'react';

type CardProps = {
  title: string;
  subtitle?: string;
  content?: string;
  buttonText?: string | JSX.Element;
  backgroundColor: string;
  hoverEffect?: boolean;
  hoverImage?: string;
  animation?: string;
};

const CardGrid: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  buttonText,
  backgroundColor,
  hoverEffect = false,
  hoverImage,
  animation, 
}) => {
  return (
    <div
      className={`relative border rounded-lg p-4 mx-2 text-justify ${backgroundColor} ${
        hoverEffect ? 'group hover:bg-opacity-35 transition-colors duration-300 ' : ''
      }`}
      data-aos={animation} 
    >
      {/* Imagen de fondo al hacer hover */}
      {hoverImage && (
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ backgroundImage: `url(${hoverImage})` }}
        />
      )}

      {/* Contenido principal */}
      <h2
        className={`font-bold text-2xl ${hoverEffect ? '' : ''}`}
      >
        {title}
      </h2>
      
      {/* Subtítulo */}
      {subtitle && (
        <h3
          className={`text-lg font-medium mt-1 ${
            hoverEffect ? 'text-black ' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </h3>
      )}

      {content && (
        <p
          className={`mt-2 ${
            hoverEffect ? 'text-black ' : 'text-gray-700'
          }`}
        >
          {content}
        </p>
      )}

      {/* Botón siempre visible */}
      {buttonText && (
        <button
        className={`mt-4 px-4 py-2 border rounded-lg ${
          hoverEffect
            ? 'text-black bg-white group-hover:bg-black group-hover:text-white group-hover:border-pink-50'
            : 'text-black bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {buttonText}
      </button>
      )}
    </div>
  );
};

export default CardGrid;
