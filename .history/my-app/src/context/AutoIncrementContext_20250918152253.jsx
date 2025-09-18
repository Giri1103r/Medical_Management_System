import React, { createContext, useState } from "react";
import axios from "axios";

const AutoIncrementContext = createContext();

const AutoIncrementProvider = ({ children }) => {
  const [counters, setCounters] = useState({});
  
const generateLocationId = () => {
    const newId = `LOC-${String(counter).padStart(4, "0")}`;
    setCounter(counter + 1);
    return newId;
  };

  return (
    <LocationContext.Provider value={{ generateLocationId }}>
      {children}
    </LocationContext.Provider>
  );
};