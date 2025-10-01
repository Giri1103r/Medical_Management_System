import React, { useEffect, useState } from "react";
import SidebarMenu from "./side_bar";

const LeftMenu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leftmenus/getmenus")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  return (
    <div className="h-full">
      {menuData.length > 0 ? (
        <SidebarMenu menuData={menuData} />
      ) : (
        <p className="p-4 text-white">Loading menu...</p>
      )}
    </div>
  );
};

export default LeftMenu;
