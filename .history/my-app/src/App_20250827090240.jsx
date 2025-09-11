import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";



function App() {
  return (
    <Router>
      <nav className="">
        <NavLink to="/" className=" mx-2">
          Home
        </NavLink> <br />

        <NavLink to="/register" className=" mx-2">
          Register
        </NavLink>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
