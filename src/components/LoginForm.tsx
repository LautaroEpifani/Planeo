import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useAuth } from '../hooks/useAuth';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/board');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-8 lg:mt-0 lg:ml-8">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Iniciar sesión
      </h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="relative mb-4">
          <FaEnvelopeOpenText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-12 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
            required
          />
          <label
            htmlFor="email"
            className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 
              ${email && 'top-2 text-xs text-blue-600'}`}
          >
            Correo electrónico
          </label>
        </div>
        <div className="relative mb-4">
          <RiLockPasswordLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-12 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
            required
          />
          <label
            htmlFor="password"
            className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600  
              ${password && 'top-2 text-xs text-blue-600'}`}
          >
            Contraseña
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Iniciar sesión
        </button>
      </form>
      <div className="flex items-center justify-center mt-4">
        ¿No tienes una cuenta con nosotros?
        <Link to="/register" className="ml-2 text-blue-600 hover:underline">
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
