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





function App() {
  return (
    <UserProvider>
      <MasterdataProvider>
       
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
                <Route path="/specialization/edit/:id" element={<SpecializationEdit/>} />
                <Route path="/specialization/view/:id" element={<SpecializationEdit/>} />
              </Routes>
            </div>
          </Router>
        
      </MasterdataProvider>
    </UserProvider>

  );
}

export default App;
