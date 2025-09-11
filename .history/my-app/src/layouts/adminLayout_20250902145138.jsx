import React from 'react'
import Header from './Partial/header'
import Footer from './Partial/footer'

const AdminLayout = ({ children }) => {
  return (
   <div className="d-flex flex-column min-vh-100">
  {/* Page Content */}
  <main className="flex-grow-1 d-flex justify-content-center align-items-center">
    <div className="col-md-4">
      <button 
        type="submit" 
        className="btn btn-primary me-2" 
        disabled={isSubmitting}
      >
        Login
      </button>

      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-dark text-white text-center p-3">
    My Footer
  </footer>
</div>

  )
}

export default AdminLayout
