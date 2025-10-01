import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

const SideBarItem = ({ item, menuData }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // find children for this item
  const children = menuData.filter(
    (child) => String(child.parent_id) === String(item._id)
  );

  const hasChildren = children.length > 0;

  return hasChildren ? (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        {item.icon && <i className={`${item.icon} w-5 h-5 mr-2`} />}
        <span className="flex-1">{item.name || "NO NAME"}</span>
        <span className="ml-auto text-gray-500">{open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div className="ml-6 mt-1 space-y-1 border-l pl-2">
          {children.map((child) => (
            <SideBarItem key={child._id} item={child} menuData={menuData} />
          ))}
        </div>
      )}
    </div>
  ) : (
    <button
      onClick={() => navigate(item.link)}
      className="flex items-center w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
    >
      {item.icon && <i className={`${item.icon} w-5 h-5 mr-2`} />}
      <span>{item.name || "NO NAME"}</span>
    </button>
  );
};

const SidebarMenu = ({ menuData }) => {
  const rootItems = menuData.filter((m) => String(m.parent_id) === "0");

  return (
    <ProSidebarProvider>
      <aside className="w-64 bg-white shadow-md h-screen p-4">
        <div className="text-lg font-bold mb-4 text-gray-800">MMS</div>
        <div className="space-y-1">
          {rootItems.map((item) => (
            <SideBarItem key={item._id} item={item} menuData={menuData} />
          ))}
        </div>
      </aside>
    </ProSidebarProvider>
  );
};

export default SidebarMenu;
