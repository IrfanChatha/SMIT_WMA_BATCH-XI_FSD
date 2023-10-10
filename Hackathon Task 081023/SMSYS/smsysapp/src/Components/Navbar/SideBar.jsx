import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SideBar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="side_bar d-flex flex-column justify-content-between bg-primary text-white p-4 vh-100">
      <div>
        <a href="d-flex align-items-center">
          <span className="textGreen rounded custom_shadow px-3 me-3 fs-5">
            SMIT
          </span>
          <span className="textWhite fs-5">Hackathon</span>
        </a>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-speedometer me-2 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="StudentPage" className="nav-link text-white">
              <i className="bi bi-person me-2 fs-5"></i>
              <span className="fs-5">Students</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="CoursesPage" className="nav-link text-white">
              <i className="bi bi-book me-2 fs-5"></i>
              <span className="fs-5">Courses</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="AttendancePage" className="nav-link text-white">
              <i className="bi bi-calendar me-2 fs-5"></i>
              <span className="fs-5">Attendance</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary" />
        <i className="bi bi-person fs-5"></i>
        <span className="fs-4">Irfan</span>
      </div>
    </div>
  );
}

export default Sidebar;
