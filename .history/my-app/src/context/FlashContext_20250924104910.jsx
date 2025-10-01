import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const FlashContext = createContext()

export const useFlash = () => useContext(FlashContext);



const  FlashProvider =({children}) => {

    const location = useLocation();

   const flash = (msg, type = "success") => {
    if (type === "success") toast.success(msg);
    if (type === "error") toast.error(msg);
    if (type === "info") toast.info(msg);
    if (type === "warn") toast.warn(msg);
  };

  useEffect(()=>{
    if (location.state?.message) {
      flash(location.state.message, "success");
      window.history.replaceState({}, document.title); 
    }
  }, [location]);
 return (
    <FlashContext.Provider value={{ flash }}>
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </FlashContext.Provider>
  );
};

export default FlashProvider;

