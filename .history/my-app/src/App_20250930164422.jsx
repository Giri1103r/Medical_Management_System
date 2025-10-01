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
import SpecializationAdd from "./admin/specialization/SpecializationAdd";
import SpecializationList from "./admin/specialization/SpecializationList";
import SpecializationEdit from "./admin/specialization/SpecializationEdit";
import SpecializationView from "./admin/specialization/SpecializationView";
import FlashProvider from "./context/FlashContext";





function App() {
  return (
    <Router> 
      <UserProvider>
        <MasterdataProvider>
          <FlashProvider>
            <div className="">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/leftmenu" element={<Leftmenuadd />} />
                <Route path="/leftmenu/add" element{}
                <Route path="/specialization/add" element={<SpecializationAdd />} />
                <Route path="/specialization" element={<SpecializationList />} />
                <Route path="/specialization/edit/:id" element={<SpecializationEdit />} />
                <Route path="/specialization/view/:id" element={<SpecializationView />} />
              </Routes>
            </div>
          </FlashProvider>
        </MasterdataProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
