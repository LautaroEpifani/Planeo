import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userLogged } = useAuth();

  if (userLogged === null) {
    return <div>Loading...</div>;
  }

  return userLogged ? children : <Navigate to="/" />;
};

export default PrivateRoute;
