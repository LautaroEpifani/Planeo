import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Error404Page() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const idInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const idTimeout = setTimeout(() => {
      // redirigir programáticamente
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(idInterval);
      clearTimeout(idTimeout);
    };
  }, [navigate]);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            Volviendo a la página principal en{' '}
            <span className="font-bold text-blue-500">{countdown}</span>{' '}
            segundos...
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Volver a la página principal
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404Page;
