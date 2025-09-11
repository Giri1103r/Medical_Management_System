import React, { useEffect, useState } from 'react'


export const UserContext = createContext();

export const UserProvider  = ({ childern }) => {
    const [user, setUser] = useState(null);
  
    useEffect = ()=>{
        const token = localStorage.getItem("token");
        if(token){
            const decode  = jwt_decode("token")
            setUser(decode);
        }
    }

    const OnLogin = ()=>{
        const 
    }

   

}