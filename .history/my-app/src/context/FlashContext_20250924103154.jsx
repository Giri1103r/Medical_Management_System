import React, { createContext, useState } from "react";
import axios from "axios";

const FlashContext = createContext()



const  FlashProveider =({children}) => {

    const [message,setMessage]= useState([])

    return (
        <div className="bottom-corner">
            {{toastify.message}}
        </div>
    )

}

