// Header.jsx
import React, { useContext, useState } from "react";
import { Bell, Menu, LogOut, User } from "react-feather";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = ({ notifications, user, onLogout, title }) => {
  const [unreadCount, setUnreadCount] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const markAllRead = () => {
    setUnreadCount(0);
  };

  const OnLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-sm bg-white">
      {/* Left: Logo and Title */}
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button className="lg:hidden p-2 mr-2 border rounded bg-gray-100">
          <Menu size={20} />
        </button>

        {/* Logo */}
        <a href="/dashboard" className="flex items-center">
          <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
        </a>

        {/* Page title */}
        <h5 className="ml-3 text-lg font-medium">{title}</h5>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <div className="relative">
          <button
            className="relative p-2 rounded hover:bg-gray-100"
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
          <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg z-50 hidden group-hover:block">
            <div className="px-4 py-2 flex justify-between items-center border-b">
              <span className="font-semibold">Notifications</span>
              {unreadCount > 0 && (
                <span
                  className="text-blue-500 text-sm cursor-pointer"
                  onClick={markAllRead}
                >
                  Mark all read
                </span>
              )}
            </div>
            {/* Optional notifications list */}
            <div className="max-h-60 overflow-y-auto"></div>
            <div className="text-center border-t py-2">
              <a
                href="/notifications"
                className="text-blue-500 text-sm hover:underline"
              >
                View all
              </a>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="relative group">
          <button className="flex items-center p-1 rounded hover:bg-gray-100">
            <img
              src={user?.avatar || "/logo192.png"}
              alt="avatar"
              className="h-9 w-9 rounded-full mr-2"
            />
          </button>

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 hidden group-hover:block">
            <div className="px-4 py-2 border-b">Welcome!</div>
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <User size={16} className="mr-2" /> My Account
            </a>
            <div className="border-t"></div>
            <button
              onClick={onLogout || OnLogout}
              className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
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
