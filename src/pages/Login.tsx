import imagen1 from '../assets/imagen4.png';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="h-screen bg-white-100 flex flex-col">
      <Header />
      <div className="flex-1 bg-custom-gradient flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full px-4 lg:px-0">
          <img
            src={imagen1}
            alt="imagen productividad"
            className="h-auto p-5 max-w-xs object-cover lg:max-w-sm"
          />
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
