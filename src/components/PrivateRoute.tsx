import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userLogged } = useAuth();
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (userLogged === null) {
      setLoading(true);
      const timer = setTimeout(() => {
        setRedirecting(true);
      }, 1000); 
      return () => clearTimeout(timer);
    } else {
      setLoading(false); 
    }
  }, [userLogged]);

  if (redirecting) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Checking authentication...</div>; 
  }

  return userLogged ? children : <Navigate to="/" />;
};

export default PrivateRoute;
