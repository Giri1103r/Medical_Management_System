import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { UserProvider } from "./context/UserContext";
import { MasterdataProvider } from "./context/MasterdataContext";
import Leftmenuadd from "./admin/leftmenu/Leftmenuadd";





function App() {
  return (
    <UserProvider>
      <MasterdataProvider>
        <AutoIncrementContext></>
      <Router>

        <div className="">
          <Routes>

            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/leftmenu" element={<Leftmenuadd />}></Route>
          </Routes>
        </div>
      </Router>
    </MasterdataProvider>
    </UserProvider>

  );
}

export default App;
