import React from "react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image?: string; // Imagen del autor, si lo deseas agregar
}

const testimonials: Testimonial[] = [
  {
    text: "Como gerente de proyectos, Planeo ha sido una herramienta indispensable para mantener a mi equipo sincronizado y garantizar que cumplamos con los plazos establecidos.",
    author: "María Rodríguez",
    role: "Gerente de Proyectos",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    text: "Planeo me ha permitido organizar los planes de marketing y coordinar campañas con facilidad. Es intuitivo y perfecto para trabajar con equipos multidisciplinarios.",
    author: "Luis Martínez",
    role: "Especialista en Marketing",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    text: "Como desarrollador web, Planeo me ayuda a gestionar tareas, integrar proyectos con mi equipo y mantener un flujo de trabajo claro y eficiente. No puedo imaginar trabajar sin él ahora.",
    author: "Pedro Sánchez",
    role: "Desarrollador Web",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials p-6 my-20 ">
      <h3 className="text-2xl font-semibold mb-10 text-center text-gray-800">Lo que dicen los usuarios</h3>
      
      <div className="testimonial-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {/* Imagen del autor */}
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="italic text-gray-700">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
