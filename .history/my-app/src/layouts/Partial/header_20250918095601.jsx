// Header.jsx
import React, { useContext, useEffect, useState } from "react";
import { Bell, Menu, LogOut, User, Sun, Moon } from "react-feather";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = ({ notifications, user, onLogout, title }) => {
  const [unreadCount, setUnreadCount] = useState(null);

  // ✅ Initialize theme only once
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // ✅ Apply/remove dark class when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const markAllRead = () => {
    setUnreadCount(0);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    if (onLogout) {
      onLogout();
    } else {
      navigate("/");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-sm bg-white dark:bg-gray-900 dark:text-white">
      {/* Left: Logo and Title */}
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button className="lg:hidden p-2 mr-2 border rounded bg-gray-100 dark:bg-gray-800">
          <Menu size={20} />
        </button>

        {/* Logo */}
        <a href="/dashboard" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="mx-2 h-8 w-8 rounded"
          />
        </a>

        {/* Page title */}
        <h5 className="ml-3 text-lg font-medium">{title}</h5>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <div className="relative">
          <button
            className="relative p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={markAllRead}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* 🌙 Theme Toggle */}
        <div>
          <button
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Profile */}
        <div className="relative group">
          <button className="flex items-center p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              src={user?.avatar || "/logo192.png"}
              alt="avatar"
              className="h-9 w-9 rounded-full mr-2"
            />
          </button>

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-50 hidden group-hover:block">
            <div className="px-4 py-2 border-b dark:border-gray-700">
              {user?.name}
            </div>
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <User size={16} className="mr-2" /> My Account
            </a>
            <div className="border-t dark:border-gray-700"></div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
