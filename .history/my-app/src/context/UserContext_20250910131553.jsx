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
  }, []); // empty dependency array to run only once

  // 4️⃣ Login function
  const onLogin = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwt_decode(token);
    setUser(decoded);
  };

  // 5️⃣ Logout function
  const onLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // 6️⃣ Return provider
  return (
    <UserContext.Provider value={{ user, onLogin, onLogout }}>
      {children} {/* correct spelling of children */}
    </UserContext.Provider>
  );
};
