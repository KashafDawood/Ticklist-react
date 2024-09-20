import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookies";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = Cookies.getItem("jwt");

    if (userId && token) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
