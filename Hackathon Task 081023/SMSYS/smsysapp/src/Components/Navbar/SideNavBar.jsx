import React from 'react'
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div>

    <div class="container-fluid">
    <div class="row">
    <div class="col-2 text-bg-primary">
    <ul class="nav flex-column">
      <li class="nav-item">
      <Link to="/" style={{paddingLeft:'10px', color:'white'}}>Dashboard</Link>
      </li>
      <li class="nav-item">
      <Link to="../StudentPage" style={{paddingLeft:'10px', color:'white'}}>Student Page</Link>
      </li>
      <li class="nav-item">
      <Link to="../CoursesPage" style={{paddingLeft:'10px', color:'white'}}>Courses Page</Link>
      </li>
      <li class="nav-item">
      <Link to="../AttendancePage" style={{paddingLeft:'10px', color:'white'}}>Attendance Page</Link>
      </li>

      <li> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </li>

    </ul>
    </div>
    <div class="col-10">
      
....

    </div>
  </div>


  

    </div></div>
  )
}

export default SideNavBar