import React from 'react'
import Header from './Partial/header'
import Footer from './Partial/footer'

const AdminLayout = ({ children }) => {
  return (
    <div id="wrapper" className="d-flex flex-column min-vh-100">
      {/* Top Navbar */}
      <Header />

      {/* Page Content */}
      <div className="content-page flex-grow-1">
        <div className="content p-3">
          {children}
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout
