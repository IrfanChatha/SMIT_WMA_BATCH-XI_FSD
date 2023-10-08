import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from "react-router-dom"

const SideNavBar = () => {
  return (

    <Nav className="flex-column text-bg-primary col-2">
      <NavItem><Link to="/" style={{paddingLeft:'10px', color:'white'}}>Dashboard</Link></NavItem>
      <NavItem><Link to="../StudentPage" style={{paddingLeft:'10px', color:'white'}}>Student Page</Link></NavItem>
      <NavItem><Link to="../CoursesPage" style={{paddingLeft:'10px', color:'white'}}>Courses Page</Link></NavItem>
      <NavItem><Link to="../AttendancePage" style={{paddingLeft:'10px', color:'white'}}>Attendance Page</Link></NavItem>
      <NavItem style={{height:'420px'}}></NavItem>    
    </Nav>
  )
}

export default SideNavBar