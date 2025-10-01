import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const FlashContext = createContext()

export const useFlash = () => useContext(FlashContext);



const  FlashProveider =({children}) => {

    const location = useLocation();

    const 
}

