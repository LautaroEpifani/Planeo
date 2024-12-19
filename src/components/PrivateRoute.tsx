import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userLogged } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userLogged === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [userLogged]);
  if (loading) {
    return <div>Checking authentication...</div>;
  }
  return userLogged ? children : <Navigate to="/" />;
};

export default PrivateRoute;
