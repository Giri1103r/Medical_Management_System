import React, { createContext, use } from 'react'
import axios from "axios";

export const MasterdataContext = createContext();

const MasterdataContext = ({children}) => {
    const [data,setdata] = 
  return (
    <div>MasterdataContext</div>
  )
}

export default MasterdataContext