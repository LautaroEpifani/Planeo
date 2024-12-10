import { useState, ReactNode, useEffect } from "react";
import { LoginData } from "../../types/types";
import {
  checkSession,
  loginService,
  logoutService,
} from "../../services/authService";
import AuthContext from "./AuthContext";


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkSession()
      .then((data) => {
        console.log(data)
        setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  const login = (data: LoginData): Promise<void> => {
   return loginService(data)
      .then(() => setIsAuthenticated(true))
      .catch((error) => {
        alert(error.message || "Error al iniciar sesión");
        throw error; 
      });
  };

  const logout = () => {
    logoutService()
      .then(() => setIsAuthenticated(false))
      .catch((error) => {
        alert(error.message || "Error al cerrar sesión");
      });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
