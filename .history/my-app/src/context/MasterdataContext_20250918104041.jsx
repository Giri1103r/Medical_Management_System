import React, { createContext, use } from 'react'
import axios from "axios";

export const MasterdataContext = createContext();

const MasterdataContext = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchdata = async () => async (key, url) => {
        setLoading((prev) => ({ ...prev, [key]: true }));
        try {
            const res = await axios.get(url);
            setData((prev) => ({ ...prev, [key]: res.data }));
        } catch (err) {
            console.error(`Error fetching ${key}:`, err);
            setData((prev) => ({ ...prev, [key]: [] }));
        } finally {
            setLoading((prev) => ({ ...prev, [key]: false }));
        }
    };


    return (
       <
    )
}

export default MasterdataContext