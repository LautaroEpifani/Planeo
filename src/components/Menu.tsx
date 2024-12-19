import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AiOutlineLogout } from 'react-icons/ai';

interface MenuProps {
  className?: string;
  vertical?: boolean;
  sidebar?: boolean;
}

function Menu(props: MenuProps) {
  const { className, vertical, sidebar } = props;
  const { userLogged, logout } = useAuth();

  const classes = `
    ${
      sidebar
        ? 'flex flex-col   p-4 gap-6 h-full'
        : 'absolute top-8 right-4 flex gap-4 '
    }
    ${vertical ? 'flex-col items-center' : ''}
    text-l font-bold ${className}
  `;

  const menuClases = `hover:text-blue-500 hover:bg-white p-2 `;

  return (
    <nav className={classes}>
      <NavLink to="/" className={menuClases}>
        Inicio
      </NavLink>
      <NavLink to="/sobre-nosotros" className={menuClases}>
        Sobre Nosotros
      </NavLink>
      <NavLink to="/contact" className={menuClases}>
        Contacto
      </NavLink>
      {userLogged && (
        <NavLink to="/board" className={menuClases}>
          Tablero
        </NavLink>
      )}
      {/* <NavLink to="/board" className={menuClases}>
        Tablero
      </NavLink> */}
      {!userLogged && (
        <NavLink to="/login" className={menuClases}>
          Inicia sesión
        </NavLink>
      )}
      {!userLogged && (
        <NavLink
          to="/register"
          className="bg-blue-900 text-white hover:bg-blue-500 py-2 px-4 rounded"
        >
          Regístrate!
        </NavLink>
      )}
      {userLogged && <button className="flex items-center bg-pink-500 bg-opacity-65 text-white text-2xl p-1 rounded-md" onClick={logout}>
        <AiOutlineLogout />
      </button>}
    </nav>
  );
}

export default Menu;
