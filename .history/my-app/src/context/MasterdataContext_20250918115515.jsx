// src/context/MasterdataContext.jsx
import React, { createContext, useState } from "react";
import axios from "axios";

// Only declare once
export const MasterdataContext = createContext();

export const MasterdataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});

  const fetchData = async (key, url) => {
    setLoading(prev => ({ ...prev, [key]: true }));
    try {
      const res = await axios.get(url);
      setData(prev => ({ ...prev, [key]: res.data }));
    } catch (err) {
      console.error(`Error fetching ${key}:`, err);
      setData(prev => ({ ...prev, [key]: [] }));
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }));
    }
  };

  return (
    <MasterdataContext.Provider value={{ data, loading, fetchData }}>
      {children}
    </MasterdataContext.Provider>
  );
};
