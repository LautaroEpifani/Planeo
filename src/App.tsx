import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages';
import Register from './pages/Register';
import Login from './pages/Login';
import Board from './pages/Board/Board';
import Error404Page from './pages/Error404Page';
import AuthProvider from './context/auth/AuthProvider';
import CardsProvider from './context/cards/CardsProvider';
import SobreNosotros from './pages/SobreNosotros';
import Contact from './pages/Contact';
// import PrivateRoute from "./components/PrivateRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useLayoutEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      once: true, // Ejecuta la animación solo una vez al hacer scroll
    });
  }, []);

  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <AuthProvider>
        <CardsProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <PrivateRoute> */}
            <Route path="/board" element={<Board />} />
            {/* </PrivateRoute> */}
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </CardsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
