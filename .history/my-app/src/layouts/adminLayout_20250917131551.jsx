import React from 'react'
import Header from './Partial/header'
import Footer from './Partial/footer'

const AdminLayout = ({ title, children }) => {
  return (
    <div id="wrapper" className="d-flex flex-column min-vh-100 w-100">
      {/* Top Navbar */}
      <Header title={title} />

      <left

      {/* Page Content */}
      <div className="content-page flex-grow-1 d-flex flex-column w-100">
        <div className="content flex-grow-1 p-3 w-100">
          {children}
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout
