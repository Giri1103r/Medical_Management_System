import React from 'react'
import Header from './Partial/header'
import Footer from './Partial/footer'

const AdminLayout = ({ children }) => {
  return (
<div id="wrapper" className="d-flex flex-column min-vh-100" style={ back }>
  {/* Top Navbar */}
  <Header />

  {/* Page Content should expand */}
  <main className="flex-grow-1">
    <div className="content p-3">
      {children}
    </div>
  </main>

  {/* Footer sticks at bottom */}
  <Footer />
</div>

  )
}

export default AdminLayout
