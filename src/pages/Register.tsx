import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';
import imagen1 from '../assets/imagen2.png';

const RegisterPage: React.FC = () => {
  return (
    <div className="h-screen bg-white-100 flex flex-col">
      <Header />
      <div className="flex-1 bg-custom-gradient flex items-center justify-center py-5">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full px-4 lg:px-0">
          <img
            src={imagen1}
            alt="imagen productividad"
            className="h-auto p-5 max-w-xs object-cover lg:max-w-sm"
          />
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
