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
import LocationAdd from "./admin/master/location/add";
import Locationlist from "./admin/master/location/list";
import LocationEdit from "./admin/master/location/edit";
import LocationView from "./admin/master/location/view";

import DepartmentAdd from "./admin";
import Departmentlist from "./admin/master/department/list";
import DepartmentEdit from "./admin/master/department/edit";
import DepartmentView from "./admin/master/department/view";





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
                <Route path="/leftmenu" element={<LeftmenuList />} />
                <Route path="/leftmenu/add" element={<Leftmenuadd />} />

                <Route path="/specialization/add" element={<SpecializationAdd />} />
                <Route path="/specialization" element={<SpecializationList />} />
                <Route path="/specialization/edit/:id" element={<SpecializationEdit />} />
                <Route path="/specialization/view/:id" element={<SpecializationView />} />
                
                <Route path="/location" element={<Locationlist />} />
                <Route path="/location/add" element={<LocationAdd />} />
                <Route path="/location/edit/:id" element={<LocationEdit />} />
                <Route path="/location/view/:id" element={<LocationView />} />

                <Route path="/department" element={<Departmentlist />} />
                <Route path="/department/add" element={<DepartmentAdd />} />
                <Route path="/department/edit/:id" element={<DepartmentEdit />} />
                <Route path="/department/view/:id" element={<DepartmentView />} />


              </Routes>
            </div>
          </FlashProvider>
        </MasterdataProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
