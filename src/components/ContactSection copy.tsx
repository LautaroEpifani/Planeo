import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import HeaderFormAnimation from '../components/LottieAnimation/HeaderAnimationForm';

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <FiMapPin size={50} color="white" />,
    title: "Dirección",
    content: "Calle Llàstics, 2, Barcelona, España",
    link:"https://www.google.com/",
  },
  {
    icon: <FaPhoneVolume size={50} color="white" />,
    title: "Teléfono",
    content: "+34 912 345 678",
    link: "tel:+34912345678",
  },
  {
    icon: <IoIosMail size={55} color="white" />,
    title: "Email",
    content: "info@planeo.com",
    link: "mailto:info@planeo.com",
  },
];

const ContactSection: React.FC = () => {
  return (
    <div className="sm:mb-16 md:mb-20 lg:mb-24">
      
      {/* Header */}
      <div className="mx-4 mt-10 sm:mx-10 md:mx-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:py-6 md:py-8 ml-0 sm:ml-4 lg:ml-10">
          ¿Tienes alguna duda?
        </h1>
        <div className="flex justify-center items-center mx-auto">
          <HeaderFormAnimation />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-500 font-bold">
          Escríbenos
        </h2>
      </div>

      {/* Contact Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5 text-center">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }} // Inicia invisible y desplazado
            animate={{ opacity: 1, y: 0 }} // Animación hacia la posición final
            transition={{ delay: index * 0.2, duration: 0.6 }} // Delay para cada elemento
          >
            <a 
              href={item.link} 
              className="bg-blue-500 p-4 rounded-full mb-4
                transition-transform transform hover:scale-110 hover:bg-blue-700
                hover:text-white duration-300 ease-in-out"
              target="_blank" // Esto abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Asegura la seguridad al abrir en una nueva pestaña
            >
              {item.icon}
            </a>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="pt-5">
              <a 
                href={item.link} 
                className="text-black hover:underline"
                target="_blank" // También abrimos el enlace de texto en una nueva pestaña
                rel="noopener noreferrer" // Seguridad también aquí
              >
                {item.content}
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
