import { useState, ReactNode, useEffect } from "react";
import { LoginData, Project, User } from "../../types/types";
import {
  checkSession,
  loginService,
  logoutService,
} from "../../services/authService";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userLogged, setUserLogged] = useState<User | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    checkSession()
      .then((data) => {
        console.log(data);
        setUserLogged(data.user);
      })
      .catch(() => setUserLogged(null));
  }, []);

  const login = (data: LoginData) => {
    return loginService(data)
      .then(() =>
        checkSession().then((data) => {
          setUserLogged(data.user);
        })
      )
      .catch((error) => {
        alert(error.message || "Error al iniciar sesión");
        throw error;
      });
     
  };

  const logout = () => {
    logoutService()
      .then(() => setUserLogged(null))
      .catch((error) => {
        alert(error.message || "Error al cerrar sesión");
      });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ userLogged, login, logout, activeProject, setActiveProject }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
