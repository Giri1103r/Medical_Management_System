// AdminLayout.jsx
import React, { useState } from "react";
import Header from "./Partial/Header";
import Footer from "./Partial/Footer";
import SidebarMenu from "./Partial/side_bar"; // Updated sidebar component
import menuData from "./Partial/menuData"; // Your menu JSON/data

const AdminLayout = ({ title, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile toggle

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header
        title={title}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-grow w-full pt-16">
        {/* Sidebar */}
        <SidebarMenu
          menuData={menuData}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="flex-grow flex flex-col transition-all duration-300 ease-in-out">
          <div className="flex-grow p-4">{children}</div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

