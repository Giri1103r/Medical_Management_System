import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { UserProvider } from "./context/UserContext";





function App() {
  return (
    <UserProvider>
      
    </UserProvider>
    <Router>
     
      <div className="container mt-5 pt-4">
        <Routes>
         
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/profile" element ={<Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
