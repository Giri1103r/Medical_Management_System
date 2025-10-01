import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const SideBarItem = ({ item, menuData }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const children = menuData.filter(
    (child) => String(child.parent_id) === String(item._id)
  );

  const hasChildren = children.length > 0;

  return hasChildren ? (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full px-4 py-2 text-white-700 hover:bg-gray-100 rounded-full"
      >
        {item.icon && <i className={`${item.icon} w-5 h-5 mr-2`} />}
        <span className="flex-1 bg-blue">{item.name || "NO NAME"}</span>
        <span className="ml-auto text-blue-500">{open ? "▾" : "▸"}</span>
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const rootItems = menuData.filter((m) => String(m.parent_id) === "0");

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-md p-4 w-64 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative md:block`}
      >
        <div className="text-lg font-bold mb-4 text-gray-800">MMS</div>
        <div className="space-y-1 overflow-y-auto max-h-screen">
          {rootItems.map((item) => (
            <SideBarItem key={item._id} item={item} menuData={menuData} />
          ))}
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default SidebarMenu;
