import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { UserProvider } from "./context/UserContext";
import { MasterdataProvider } from "./context/MasterdataContext";
import { AutoIncrementProvider } from "./context/AutoIncrementContext";
import Leftmenuadd from "./admin/leftmenu/Leftmenuadd";
import SpecializationAdd from "./admin/specialization/SpecializationAdd";
import SpecializationList from "./admin/specialization/SpecializationAdd";





function App() {
  return (
    <UserProvider>
      <MasterdataProvider>
        <AutoIncrementContextProvider>
          <Router>

            <div className="">
              <Routes>

                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/leftmenu" element={<Leftmenuadd />}></Route>
                <Route path="/specialization/add" element={<SpecializationAdd/>} />
                <Route path="/specialization" element={<SpecializationList/>} />
              </Routes>
            </div>
          </Router>
        </AutoIncrementProvider>
      </MasterdataProvider>
    </UserProvider>

  );
}

export default App;
