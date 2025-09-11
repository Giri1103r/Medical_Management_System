import React, { useState } from 'react'


export const UserContext = createContext();

export const UserProvider  = ({ childern }) => {
    const [user, setUser] = useState(null);
  
  

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );

}