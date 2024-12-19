import React from "react";
import IconCarousel from "../AnimatedLogos"; // Ajusta la ruta según tu estructura de proyecto

interface App {
  name?: string;
  description?: string;
}

interface IconProps {
  Icon: React.ReactNode; // Componente de ícono o SVG que se pasará
  color: string;         // Color del ícono
  size: number;          // Tamaño del ícono en píxeles
}

interface SectionTechnologiesProps {
  title: string;
  description: string;
  icons: IconProps[];  // Usamos el tipo específico para los íconos
  apps?: App[]; // Nueva propiedad para las aplicaciones
  imageFirst?: boolean;
  animation?: string;
}

const SectionTechnologies: React.FC<SectionTechnologiesProps> = ({
  title,
  description,
  icons,
  apps = [], // Default a un array vacío si no se pasa apps
  imageFirst = false,
  animation = "fade-up",
}) => {
  return (
    <div className={`flex flex-wrap ${imageFirst ? "flex-row-reverse" : ""} mx-11 mt-5`}>
      {/* Contenedor de texto */}
      <div className="md:w-1/2 p-8" data-aos={animation}>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-lg text-gray-600 text-justify">{description}</p>

        {/* Listado de aplicaciones */}
        {apps.length > 0 && (
          <div className="mt-6">
            <ul className="mt-4 list-disc list-inside">
              {apps.map((app, index) => (
                <li key={index} className="ml-6 py-2 text-lg text-justify text-gray-600">
                  <strong>{app.name}:</strong> {app.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contenedor de logotipos de tecnologías usando IconCarousel */}
      <div
        className="md:w-1/2 p-8 flex flex-wrap items-center justify-center mx-auto space-x-4"
        data-aos={animation}
      >
        {icons.map((iconProps, index) => (
          <div key={index} className="mx-4">
            <IconCarousel {...iconProps} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTechnologies;
