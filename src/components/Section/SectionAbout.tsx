import React from 'react';

interface SectionAboutProps {
  title: string;
  text: string;
  imageSrc?: string[]; // Hacerlo opcional si no hay imágenes
  imageAlt?: string[]; // Hacerlo opcional si no hay imágenes
  animation?: string;
  imageFirst?: boolean; // Indica si la imagen debe ir antes que el texto
  imageClasses?: string[]; // Propiedad para las clases de las imágenes
  imageLinks?: string[]; // Nueva propiedad opcional para los enlaces de las imágenes
}

const SectionAbout: React.FC<SectionAboutProps> = ({
  title,
  text,
  imageSrc,
  imageAlt,
  animation = "fade-up", 
  imageFirst = false, 
  imageClasses = [], // Valor predeterminado (un arreglo vacío)
  imageLinks, // Aceptamos los enlaces opcionales para las imágenes
}) => {
  return (
    <div className={`flex flex-wrap ${imageFirst ? "flex-row-reverse" : ""} mx-11 mt-28`}>
      {/* Contenedor de texto */}
      <div className="md:w-1/2 p-8" data-aos={animation}>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-lg text-gray-600 text-justify">{text}</p>
      </div>

      {/* Contenedor de imágenes */}
      <div className="md:w-1/2 p-8 flex items-center justify-center mx-auto space-x-10" data-aos={animation}>
        {imageSrc?.map((src, index) => (
          <a key={index} href={imageLinks?.[index]} target="_blank" rel="noopener noreferrer">
            <img
              src={src} 
              alt={imageAlt?.[index] || `Image ${index + 1}`} // Texto alternativo correspondiente
              className={`
                ${imageClasses[index] || "w-full h-auto"} 
                transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg
              `} // Animación al hacer hover
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionAbout;
