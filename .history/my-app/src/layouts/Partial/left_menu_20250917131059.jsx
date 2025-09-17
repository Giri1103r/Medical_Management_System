import React, { useEffect, useState } from 'react'

const left_menu = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/menus")
            .then(response => response.json())
            .then(data => setMenuData(data))
            .catch(error => console.error('Error fetching menu data:', error));
    }, []);

    return (
        <div>
            {}
        </div>
    )
}

export default left_menu