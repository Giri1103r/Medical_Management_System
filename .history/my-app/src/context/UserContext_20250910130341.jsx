import React, { useState } from 'react'


export const UserContext = createContext();

export const UserProveider = ({ childern }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt_decode(token);
            setUser(decoded);
        }
    }, []);
    const loginUser = (token) => {
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        setUser(decoded);
    };

    const logoutUser = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );

}