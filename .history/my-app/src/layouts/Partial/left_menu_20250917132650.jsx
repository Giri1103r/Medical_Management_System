import React, { useEffect, useState } from "react";
import SidebarMenu from "./side_bar"; // ✅ fix wrong import syntax

const LeftMenu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menus")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched menu data:", data); // ✅ log here
        setMenuData(data);
      })
      .catch((error) =>
        console.error("Error fetching menu data:", error)
      );
  }, []);

  return (
    <div>
      {menuData.length > 0 ? (
        <SidebarMenu menuData={menuData} />
      ) : (
        <p>Loading menu...</p>
      )}
    </div>
  );
};

export default LeftMenu;
