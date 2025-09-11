import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
    }
  }, []); 

  const onLogin = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwt_decode(token);
    setUser(decoded);
  };


  const onLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

 
  return (
    <UserContext.Provider value={{ user, onLogin, onLogout }}>
      {children} 
    </UserContext.Provider>
  );
};
