import { createContext } from "react";
import { LoginData } from "../../types/types";
interface AuthContextType {
  isAuthenticated: boolean | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext