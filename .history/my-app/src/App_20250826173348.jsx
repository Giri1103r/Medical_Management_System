import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Home from "./Home";



function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className=" mx-2">
          Home
        </NavLink> <br />

        <NavLink to="/register" className=" mx-2">
          Register
        </NavLink>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
