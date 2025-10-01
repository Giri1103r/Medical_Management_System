import React, { useContext, useEffect, useState } from "react";
import { Bell, Menu, LogOut, User, Sun, Moon } from "react-feather";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = ({ notifications, user, onLogout, title, sidebarOpen, setSidebarOpen }) => {
  const [unreadCount, setUnreadCount] = useState(notifications?.length || 0);
  const [darkmode, setDarkmode] = useState(localStorage.getItem("theme") === "dark");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  const markAllRead = () => {
    setUnreadCount(0);
  };

  const OnLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-sm bg-white dark:bg-gray-800 fixed top-0 left-0 right-0 z-40">
      {/* Left: Hamburger + Logo + Title */}
     

      {/* Right: Notifications, Darkmode, Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <div className="relative group">
          <button
            className="relative p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={markAllRead}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {unreadCount}
              </span>
            )}
          </button>
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-700 border rounded shadow-lg z-50 hidden group-hover:block">
            <div className="px-4 py-2 flex justify-between items-center border-b dark:border-gray-600">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Notifications</span>
              {unreadCount > 0 && (
                <span
                  className="text-blue-500 text-sm cursor-pointer"
                  onClick={markAllRead}
                >
                  Mark all read
                </span>
              )}
            </div>
            <div className="max-h-60 overflow-y-auto"></div>
            <div className="text-center border-t dark:border-gray-600 py-2">
              <a
                href="/notifications"
                className="text-blue-500 text-sm hover:underline"
              >
                View all
              </a>
            </div>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setDarkmode(!darkmode)}
        >
          {darkmode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Profile */}
        <div className="relative group">
          <button className="flex items-center p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <img
              src={user?.avatar || "/logo192.png"}
              alt="avatar"
              className="h-9 w-9 rounded-full mr-2"
            />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border rounded shadow-lg z-50 hidden group-hover:block">
            <div className="px-4 py-2 border-b dark:border-gray-600 text-gray-800 dark:text-gray-200">{user?.name}</div>
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <User size={16} className="mr-2" /> My Account
            </a>
            <div className="border-t dark:border-gray-600"></div>
            <button
              onClick={onLogout || OnLogout}
              className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <LogOut size={16} className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
