import { createContext, Dispatch, SetStateAction } from "react";
import { LoginData, Project, User } from "../../types/types";
interface AuthContextType {
  userLogged: User | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
  activeProject: Project | null;
  setActiveProject: Dispatch<SetStateAction<Project | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext