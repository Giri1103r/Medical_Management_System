import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';

const SidebarMenu = ({ menuData }) => {
  const navigate = useNavigate();

  // recursive function to render menu items
  const renderMenuItems = (items, parentId = "0") => {
    return items
      .filter((item) => String(item.parent_id) === String(parentId))
      .map((item) => {
        const children = items.filter(
          (child) => String(child.parent_id) === String(item._id)
        );

        if (children.length > 0) {
          return (
            <SubMenu key={item._id} title={item.name || "NO NAME"} icon={<i className={item.icon}></i>}>
              {renderMenuItems(items, item._id)}
            </SubMenu>
          );
        } else {
          return (
            <MenuItem
              key={item._id}
              icon={<i className={item.icon}></i>}
              onClick={() => navigate(item.link)}
            >
              {item.name || "NO NAME"}
            </MenuItem>
          );
        }
      });
  };

  return (
    <ProSidebar breakPoint="md">
      <Menu iconShape="circle">
        <MenuItem style={{ fontWeight: "bold", cursor: "default" }}>
          MMS
        </MenuItem>
        {renderMenuItems(menuData)}
      </Menu>
    </ProSidebar>
  );
};

export default SidebarMenu;
