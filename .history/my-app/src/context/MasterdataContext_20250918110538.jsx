import React, { createContext, use } from 'react'
import axios from "axios";

export const MasterdataContext = createContext();

const MasterdataContext = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const 


    return (
       <MasterdataContext.Provider value={{ data, loading, fetchdata }}>
        {children}
       </MasterdataContext.Provider>
    )
}

export default MasterdataContext