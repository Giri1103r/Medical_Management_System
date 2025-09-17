import React from "react";
import Header from "./Partial/header";
import Footer from "./Partial/footer";
import LeftMenu from "./left_menu"; // ✅ import your sidebar

const AdminLayout = ({ title, children }) => {
  return (
    <div id="wrapper" className="flex flex-col min-h-screen w-full">
      {/* Top Navbar */}
      <Header title={title} />

      {/* Main layout with sidebar + content */}
      <div className="flex flex-grow w-full">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white min-h-screen">
          <LeftMenu />
        </aside>

        {/* Page Content */}
        <main className="flex-grow flex flex-col bg-gray-50">
          <div className="flex-grow p-4">{children}</div>

          {/* Footer at the bottom */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

