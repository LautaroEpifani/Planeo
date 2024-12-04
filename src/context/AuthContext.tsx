import { createContext, useState, ReactNode, useEffect } from "react";
import { LoginData } from "../types/types";
import {
  checkSession,
  loginService,
  logoutService,
} from "../services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkSession()
      .then(setIsAuthenticated)
      .catch(() => setIsAuthenticated(false));
  }, []);

  const login = (data: LoginData) => {
    loginService(data)
      .then(() => setIsAuthenticated(true))
      .catch((error) => {
        alert(error.message || "Error al iniciar sesión");
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

export default AuthContext;
