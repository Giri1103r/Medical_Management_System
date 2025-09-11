import React from 'react'
import Header from './Partial/header'
import Footer from './Partial/footer'

const AdminLayout = ({ children}) => {
  return (
     <div id="wrapper" className="d-flex">
      {/* Topbar */}
     <Header />

    
     

      {/* Page Content */}
      <div className="content-page flex-grow-1">
        <div className="content p-3">
          {children} {/* This is like @yield('content') */}
        </div>

        
        <Footer />
      </div>
    </div>
  )
}

export default adminLayout