import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from "react-pro-sidebar";
import { Link } from "react-router-dom";

// Recursive Sidebar Menu Component
const SideBarMenu = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;

  return hasChildren ? (
    <SubMenu key={item._id} label={item.name || "NO NAME"} icon={item.icon ? <i className={item.icon} /> : null}>
      {item.children.map((child) => (
        <SideBarMenu key={child._id} item={child} />
      ))}
    </SubMenu>
  ) : (
    <MenuItem key={item._id} icon={item.icon ? <i className={item.icon} /> : null}>
      <Link to={item.link || "#"}>{item.name || "NO NAME"}</Link>
    </MenuItem>
  );
};

// Sidebar Wrapper
const AppSidebar = ({ menuData }) => {
  return (
    <ProSidebarProvider>
      <Sidebar>
        <Menu>
          {menuData.map((item) => (
            <SideBarMenu key={item._id} item={item} />
          ))}
        </Menu>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default AppSidebar;
