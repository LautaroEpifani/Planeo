import { useState } from 'react';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { FaPaperPlane } from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Headers() {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  // Función para alternar el sidebar
  function toggleSidebar() {
    setIsOpenSidebar(!isOpenSidebar);
  }

  return (
    <>
      {/* Barra superior */}

      <div className="bg-white flex justify-between flex-row items-center py-4 sticky top-0 z-20 w-full">
        <Link to="/">
          <div className="flex flex-row items-center px-2">
            <FaPaperPlane size={30} />
            <h2 className="text-3xl font-bold mx-2 p-2">Planeo</h2>
          </div>
        </Link>

        {/* Menú para pantallas grandes */}
        <div className="hidden sm:block">
          <Menu />
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <button className="sm:hidden" onClick={toggleSidebar}>
          <TiThMenu size={50} />
        </button>
      </div>

      {/* Sidebar en el lado derecho */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 z-20 transform ${
          isOpenSidebar ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Botón de cerrar en la parte superior izquierda dentro del sidebar */}
        <div className="flex justify-start p-4">
          <button onClick={toggleSidebar}>
            <TiTimes size={30} className="text-white" />
          </button>
        </div>
        <Menu sidebar={true} />
      </div>

      {/* Fondo oscuro para cerrar el menú */}
      {isOpenSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Headers;
