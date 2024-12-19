import React, { useState } from "react";
import { z } from "zod";
import Button from "./Button";
import { Link } from "react-router-dom";

// Esquema de validación con Zod
const bannerSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().optional(),
  buttonText: z.any().optional(),
  bgColor: z.string().min(1, "El color de fondo es obligatorio"),
  buttonAction: z.function(z.tuple([]), z.void()).optional(),
  inputValue: z.string().optional(),
});

type BannerProps = z.infer<typeof bannerSchema> & {
  buttonText?: React.ReactNode; // Permite nodos React
  children?: React.ReactNode; // Para incluir contenido adicional
};

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  buttonText,
  bgColor,
  buttonAction,
  inputValue,
  children, // Nuevo prop para aceptar animaciones u otros componentes
}) => {
  const [input] = useState(inputValue || "");

  const handleSubmit = () => {
    const result = bannerSchema.safeParse({
      title,
      description,
      buttonText,
      bgColor,
      inputValue: input,
    });

    if (!result.success) {
      console.error("Errores de validación:", result.error.errors);
    }
  };

  return (
    <div
      className={`${bgColor} p-6 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-6 min-h-[70vh] md:min-h-[90vh]`} // Ajuste de la altura
    >
      {/* Contenedor de texto */}
      <div className="text-center md:text-left max-w-lg flex-shrink-0">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6"> {/* Ajuste de márgenes */}
          {title}
        </h2>
        {description && (
          <p className="text-white text-sm md:text-lg font-medium mb-4 md:mb-6"> {/* Ajuste de márgenes */}
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          {buttonText && (
            <Button
              className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white font-medium"
              onClick={handleSubmit}
            >
              {buttonText}
            </Button>
          )}
          {buttonAction && (
            <Link to="/login">
              <Button
                className="bg-blue-900 hover:bg-white hover:text-blue-900 text-white font-bold"
                onClick={buttonAction}
              >
                Regístrate
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Contenedor de animación */}
      {children && (
        <div className="w-full md:w-1/2 max-w-md md:max-w-lg aspect-w-16 aspect-h-9">
          {children}
        </div>
      )}
    </div>
  );
};

export default Banner;
