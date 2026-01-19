import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("expiry");

  const isExpired = expiry && Date.now() > expiry;

  const [isAuthenticated, setIsAuthenticated] = useState(token && !isExpired);

  const login = (tokenValue) => {
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("expiry", Date.now() + 60 * 60 * 1000); // using for 1 hour here
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
