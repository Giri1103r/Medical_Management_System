import React, { createContext, use } from 'react'
import axios from "axios";

export const MasterdataContext = createContext();

const MasterdataContext = ({children}) => {
  return (
    <div>MasterdataContext</div>
  )
}

export default MasterdataContext