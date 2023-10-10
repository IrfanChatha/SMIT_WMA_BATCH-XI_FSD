import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import './SideBar.css'
import { Link } from "react-router-dom"

const SideNavBar = () => {
  return (
<>
<Nav className="navbar navbar-expand-lg bg-primary">
  
<div className="px-2 pt-3 pb-4">
    <h1 className="fs-4"><span className="bgWhite textGreen rounded custom-shadow px-2 me-2">SMIT</span><span className="textWhite">Hackathon</span></h1>
</div>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-primary" id="navbarNav">
    </div>
</Nav>



{/* <!-- Content Section --> */}
<div className="container-fluid">
    <div className="row">
        {/* <!-- Side Navigation Bar --> */}
        <Nav className="col-md-2 bg-primary">
       {/* <li> <a href="#" style={{paddingLeft:'10px', color:'white'}}><h5>Link 1</h5></a></li>
       <li> <a href="#" style={{paddingLeft:'10px', color:'white'}}><h5>Link 2</h5></a></li>
       <li> <a href="#" style={{paddingLeft:'10px', color:'white'}}><h5>Link 3</h5></a></li></ul> */}

            <div className="position-sticky"> 

            <Link to="/" style={{paddingLeft:'10px', color:'white'}}>Dashboard</Link>
       <NavItem><Link to="../StudentPage" style={{paddingLeft:'10px', color:'white'}}>Student Page</Link></NavItem>
      <NavItem><Link to="../CoursesPage" style={{paddingLeft:'10px', color:'white'}}>Courses Page</Link></NavItem>
      <NavItem><Link to="../AttendancePage" style={{paddingLeft:'10px', color:'white'}}>Attendance Page</Link></NavItem>


                {/* <ul className="nav flexColumn">
                    <li className="navItem">
                        <a className="navLink active" href="#">
                            Link 1
                        </a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="#">
                            Link 2
                        </a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="#">
                            Link 3
                        </a>
                    </li>
                </ul> */}
            </div>
        </Nav>

        {/* <!-- Main Content (Hello World) --> */}
        <div className="col-md-10">
            <div className="container">
                <div className="row" style={{height: '85vh'}}>
                    <div className="col-md-6">
                        <h1>Hello World</h1> <a className="nav-link flex-lg-column" href="#">
                            Link 2
                        </a>
                        <h1>Hello World</h1><a className="nav-link" href="#">
                            Link 2
                        </a>
                        <h1>Hello World</h1><a className="nav-link" href="#">
                            Link 2
                        </a>
                        <h1>Hello World</h1>
                        <h1>Hello World</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








    {/* <Nav className="flex-column text-bg-primary col-2">
      <NavItem><Link to="/" style={{paddingLeft:'10px', color:'white'}}>Dashboard</Link></NavItem>
      <NavItem><Link to="../StudentPage" style={{paddingLeft:'10px', color:'white'}}>Student Page</Link></NavItem>
      <NavItem><Link to="../CoursesPage" style={{paddingLeft:'10px', color:'white'}}>Courses Page</Link></NavItem>
      <NavItem><Link to="../AttendancePage" style={{paddingLeft:'10px', color:'white'}}>Attendance Page</Link></NavItem>
      <NavItem style={{height:'420px'}}></NavItem>    
    </Nav>  */}
    
    </>
  )
}

export default SideNavBar