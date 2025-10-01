import React, { createContext, useState } from "react";
import axios from "axios";

const FlashContext = createContext()

const  FlashProveider =({children}) => {

    return (
        <div className="bottom-corner">
            {{toastify.message}}
        </div>
    )

}

