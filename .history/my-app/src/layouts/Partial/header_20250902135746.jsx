import React, { useState } from "react";
import { Bell, Sun, Moon } from "lucide-react"; // icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <a className="navbar-brand fw-bold" href="#">
        MyApp
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
        <ul className="navbar-nav align-items-center gap-3">
          {/* Notification Bell */}
          <li className="nav-item position-relative">
            <button className="btn btn-light position-relative">
              <Bell size={22} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
          </li>

          {/* Theme Toggle */}
          <li className="nav-item">
            <button onClick={toggleTheme} className="btn btn-light">
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </li>

          {/* Profile Image */}
          <li className="nav-item">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle border"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
