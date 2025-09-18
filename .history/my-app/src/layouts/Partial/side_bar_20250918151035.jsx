import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ item, menuData }) => {
  const [open, setOpen] = useState(false);

  // find children for this item
  const children = menuData.filter(
    (child) => String(child.parent_id) === String(item._id)
  );

  const hasChildren = children.length > 0;

  return (
    <li>
      <div className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
        {/* If this item has children → show as button, else as Link */}
        {hasChildren ? (
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center flex-1 text-left"
          >
            <i className={`${item.icon} w-5 h-5 mr-2`} />
            <span>{item.name || "NO NAME"}</span>
          </button>
        ) : (
          <Link to={item.link} className="flex items-center flex-1">
            <i className={`${item.icon} w-5 h-5 mr-2`} />
            <span>{item.name || "NO NAME"}</span>
          </Link>
        )}

        {/* Only show arrow for parent items */}
        {hasChildren && (
          <span className="ml-auto text-gray-500">
            {open ? "▾" : "▸"}
          </span>
        )}
      </div>

      {open && hasChildren && (
        <h1 className="ml-6 mt-1 space-y-1 border-l pl-2">
          {children.map((child) => (
            <SideBar key={child._id} item={child} menuData={menuData} />
          ))}
        </h1>
      )}
    </li>
  );
};

const SidebarMenu = ({ menuData }) => {
  // only root items (parent_id = 0)
  const rootItems = menuData.filter((m) => String(m.parent_id) === "0");

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <div className="text-lg font-bold mb-4 text-gray-800">MMS</div>
      <ul className="space-y-1">
        {rootItems.map((item) => (
          <SideBar key={item._id} item={item} menuData={menuData} />
        ))}
      </ul>
    </aside>
  );
};

export default SidebarMenu;
