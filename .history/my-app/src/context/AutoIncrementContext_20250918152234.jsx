import React, { createContext, useState } from "react";
import axios from "axios";

const AutoIncrementContext = createContext();

const AutoIncrementProvider = ({ children }) => {
  const [counters, setCounters] = useState({});
  
  const getLocationId 