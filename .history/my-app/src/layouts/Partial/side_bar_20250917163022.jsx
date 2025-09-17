import React, { useState } from "react";
import { Link } from "react-router-dom";

const side_bar = ({item, menuData}) => {
      const [open, setOpen] = useState(false);
console
      const children = menuData.filter((child)=>child.parent_id === item._id);

   return (
    <li>
      {item.is_parent ? (
        <>
          <button
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            <i className={`${item.icon} w-5 h-5 mr-2`} />
            <span className="flex-1 text-left">{item.name}</span>
            <span className="ml-auto">{open ? "▾" : "▸"}</span>
          </button>

          {/* Child menus */}
          {open && (
            <ul className="ml-4 mt-1 space-y-1 border-l pl-2">
              {children.map((child) => (
                <side_bar key={child._id} item={child} menuData={menuData} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
          to={item.link}
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <i className={`${item.icon} w-5 h-5 mr-2`} />
          <span>{item.name}</span>
        </Link>
      )}
    </li>
  );
};

const SidebarMenu = ({ menuData }) => {
  const rootItems = menuData.filter((m) => m.parent_id === 0);

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <div className="text-lg font-bold mb-4 text-gray-800"></div>
      <ul className="space-y-1">
        {rootItems.map((item) => (
          <side_bar key={item._id} item={item} menuData={menuData} />
        ))}
      </ul>
    </aside>
  );
};
export default SidebarMenu