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
import LeftmenuList from "./admin/leftmenu/LeftmenuList";





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
                {/* Left menu */}
                <Route path="/leftmenu">
                  <Route path="add" element={<LeftmenuAdd />} />
                  <Route index element={<LeftmenuList />} />
                  <Route path="edit/:id" element={<LeftmenuEdit />} />
                </Route>
                {/*  */}
                <Route path="/specialization">
                  <Route path="add" element={<SpecializationAdd />} />
                  <Route index element={<SpecializationList />} />
                  <Route path="edit/:id" element={<SpecializationEdit />} />
                  <Route path="view/:id" element={<SpecializationView />} />
                </Route>

              </Routes>
            </div>
          </FlashProvider>
        </MasterdataProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
