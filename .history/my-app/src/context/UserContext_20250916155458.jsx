import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";// fixed import for Vite

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        const userId = decoded.id;

        fetch(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(res => res.json())
          .then(data => setUser(data))
          .catch(err => {
            console.error("Failed to fetch user details", err);
            setUser(null);
          });

      } catch (error) {
        console.error("Invalid token", error);
        setUser(null);
      }
    }
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
