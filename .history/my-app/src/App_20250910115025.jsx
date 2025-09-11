import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";




function App() {
  return (
    <Router>
     
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid d-flex justify-content-between">
          
        
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
          </ul>

         
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}

     
      <div className="container mt-5 pt-4">
        <Routes>
         
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
