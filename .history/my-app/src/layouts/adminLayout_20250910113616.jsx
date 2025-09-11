import React from 'react'
import Header from './Partial/header'
import Footer from './Partial/footer'

const AdminLayout = ({ children }) => {
  return (
    <div id="wrapper" className="">
      {/* Top Navbar */}
      <Header />

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
