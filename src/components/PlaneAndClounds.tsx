import React from "react";

const PlaneAndClouds: React.FC = () => {
  return (
    <div className="bg-sky-400 w-full h-96 overflow-hidden relative">
      {/* Título (Capa Frontal) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
          Sobre Nosotros
        </h1>
        <p className="mt-2 text-sm md:text-lg text-white drop-shadow-md">
          Descubre nuestra misión, visión y los servicios que ofrecemos.
        </p>
      </div>

      {/* Nubes (Capa más Trasera) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {["animate-cloud-movement-slowest", "animate-cloud-movement-super-slow", "animate-cloud-movement-slow"].map(
          (animationClass, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="100"
              viewBox="0 0 762 331"
              className={`absolute right-0 w-40 md:w-64 ${animationClass}`}
            >
              <path
                fill="#FFFFFF"
                d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
                  c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
                  C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
                  S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
              />
            </svg>
          )
        )}
      </div>

      {/* Avión (Capa Intermedia) */}
      <div className="w-full h-auto absolute top-[25%] z-5">
        <div className="absolute left-0 top-1/3 w-36 md:w-48 animate-zigzag">
          <a href="http://customer.io/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="60"
              viewBox="0 0 1131.53 379.304"
              className="plane"
            >
              <polygon
                fill="#D8D8D8"
                points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223"
              />
              <polygon
                fill="#C4C4C3"
                points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaneAndClouds;
