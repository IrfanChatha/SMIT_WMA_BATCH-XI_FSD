import React from 'react';
import logo from './assets/images/logo.png';
import search_icon from './assets/images/search_icon.png';
// import { a } from 'react-router-dom'

function Header() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <img src={logo} alt='Search'/><h3 style={{paddingLeft:'10px'}}>TROPICO</h3>
    <div className="collapse navbar-collapse justify-content-end fs-5 text" id="navbarSupportedContent">
      <ul className="navbar-nav mb-lg-0 mx-5">
        <li className="nav-item me-2 px-3">
          <a className="nav-a" aria-current="page" path="#"><b>Home</b></a>
        </li>
        <li className="nav-item me-2 px-3">
          <a className="nav-a" aria-current="page" path="#"><b>Fruits</b></a>
        </li>
        <li className="nav-item me-2 px-3">
          <a className="nav-a" aria-current="page" path="#"><b>Services</b></a>
        </li>
        <li className="nav-item me-2 px-3">
          <a className="nav-a" aria-current="page" path="#"><b>Contact Us</b></a>
        </li>
      </ul>
      <form className="d-flex " role="search">
      <img src={search_icon} alt='Search'/>
        <button className="ms-5 btn text-nowrap" style={{backgroundColor: 'orangered', color:'white'}} type="button">Get a Quote</button>
      </form>
    </div>
  </div>
</nav>

</>
  )
}

export default Header;