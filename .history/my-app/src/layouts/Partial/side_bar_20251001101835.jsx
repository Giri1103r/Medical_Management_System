import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { FaDatabase, FaTrash, FaEye } from "react-icons/fa";

/**
 * Recursive function to render menu items using ProSidebar
 */
const renderMenuItems = (items, menuData, navigate) => {
  return items.map((item) => {
    const children = menuData.filter(
      (child) => String(child.parent_id) === String(item._id)
    );

    if (children.length > 0) {
      return (
        <SubMenu key={item._id} title={item.name || "NO NAME"} icon={<FaDatabase />}>
          {renderMenuItems(children, menuData, navigate)}
        </SubMenu>
      );
    }

    return (
      <MenuItem
        key={item._id}
        icon={<FaEye />}
        onClick={() => navigate(item.link)}
      >
        {item.name || "NO NAME"}
      </MenuItem>
    );
  });
};

const SidebarMenu = ({ menuData }) => {
  const navigate = useNavigate();

  // only root items (parent_id = 0)
  const rootItems = menuData.filter((m) => String(m.parent_id) === "0");

  return (
    <ProSidebar breakPoint="md">
      <Menu iconShape="square">
        <MenuItem style={{ fontWeight: "bold", marginBottom: "10px" }}>
          MMS
        </MenuItem>
        {renderMenuItems(rootItems, menuData, navigate)}
      </Menu>
    </ProSidebar>
  );
};

export default SidebarMenu;
