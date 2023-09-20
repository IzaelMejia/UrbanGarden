import React, { createContext, useContext, useState } from 'react';

// Crea el contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación que envuelve tu aplicación
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Función personalizada para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
