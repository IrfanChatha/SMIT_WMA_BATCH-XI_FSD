import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import AttendancePage from "./Components/AttendancePage/AttendancePage";
import StudentPage from "./Components/StudentPage/StudentPage";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto">
          <SideNavbar />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/StudentPage" element={<StudentPage />}></Route>
            <Route path="/CoursesPage" element={<CoursesPage />}></Route>
            <Route path="/AttendancePage" element={<AttendancePage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
