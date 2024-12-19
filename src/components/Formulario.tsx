import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelopeOpenText, FaRegUser } from 'react-icons/fa';
import { AiOutlineFileSearch } from "react-icons/ai";
import FormAnimation from "../components/LottieAnimation/FormAnimation";

const FormularioContacto: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [, setError] = useState('');
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    try {
      const response = await axios.post(
        'https://planeo-test-deploy-backend.onrender.com/contact',
        {
          name,
          email,
          subject,
          message,
        }
      );
      console.log('Mensaje enviado:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message || 'Error al enviar el mensaje');
      } else {
        setError('Error desconocido');
      }
    }
  };


  return (
    <>
      {/* Contenedor principal */}
      <div className="min-h-screen gradient p-5 md:p-10 lg:p-20 flex flex-col lg:flex-row">
      {/* Sección de animación */}
      <div
        className="bg-white bg-opacity-50
          rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none
          w-full lg:w-2/3"
      >
        <FormAnimation />
      </div>


      {/* Sección del formulario */}
      <div
        className="bg-white
          rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none
          shadow-rg p-5 md:p-8
          w-full lg:w-1/2"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-4 md:mb-6">
          Contáctanos
        </h1>
        <p className="text-center text-gray-600 mb-4 md:mb-8">
          En Planeo estamos aquí para ayudarte. Completa el formulario o contáctanos directamente.
        </p>


        {/* Formulario */}
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {/* Nombre completo */}
          <div className="relative">
            <FaRegUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm pl-12 focus:ring-purple-500 focus:border-purple-500 peer py-3"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-12 top-2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Nombre completo
            </label>
          </div>


          {/* Correo electrónico */}
          <div className="relative">
            <FaEnvelopeOpenText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm pl-12 focus:ring-purple-500 focus:border-purple-500 peer py-3"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-12 top-2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Correo electrónico
            </label>
          </div>


          {/* Motivo de consulta */}
          <div className="relative">
            <AiOutlineFileSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder=" "
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm pl-12 focus:ring-purple-500 focus:border-purple-500 peer py-3"
              required
            />
            <label
              htmlFor="subject"
              className="absolute left-12 top-2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Motivo de consulta
            </label>
          </div>


          {/* Mensaje */}
          <div className="relative">
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder=" "
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 peer py-3"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 top-2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Mensaje
            </label>
          </div>


          {/* Botón de envío */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Enviar mensaje
            </button>
          </div>
          <div className="mt-6 text-center text-gray-500">
            También puedes escribirnos a{' '}
            <a href="mailto:info@planeo.com" className="text-blue-600 underline">
              info@planeo.com
            </a>
            .
          </div>

        </form>
      </div>
    </div>


    </>
  );
};


export default FormularioContacto;



