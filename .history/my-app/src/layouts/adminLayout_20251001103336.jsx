// AdminLayout.jsx
import React from "react";
import Header from "./Partial/Header";
import Footer from "./Partial/Footer";
import LeftMenu from "./Partial/Menu";

const AdminLayout = ({ title, children }) => {
  return (
    <div id="wrapper" className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <Header title={title} />

      {/* Main content area */}
      <div className="flex flex-grow w-full">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-800 text-white">
          <LeftMenu />
        </aside>

        {/* Page Content */}
        <main className="flex-grow flex flex-col bg-gray-50">
          <div className="flex-grow p-4">{children}</div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
