import React from 'react';
import logo from './assets/images/logo.png';
import search_icon from './assets/images/search_icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (

<>

<nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary" style={{backgroundColor: 'rgb(243, 233, 233)'}}>
  <div className="container-fluid">
  <Link class="navbar-brand" path="#">
      <img src={logo} alt="Bootstrap" width="60" height="54"/> <b>TROPIKO</b>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end fs-5 text" id="navbarTogglerDemo02">
      <ul className="navbar-nav mb-lg-0 mx-5">
        <li className="nav-item me-2 px-3">
          <Link className="nav-link active" aria-current="page" path="#"><b>Home</b></Link>
        </li>
        <li className="nav-item me-2 px-3">
          <Link className="nav-link active" aria-current="page" path="#"><b>Fruits</b></Link>
        </li>
        <li className="nav-item me-2 px-3">
          <Link className="nav-link active" aria-current="page" path="#"><b>Services</b></Link>
        </li>
        <li className="nav-item me-2 px-3">
          <Link className="nav-link active" aria-current="page" path="#"><b>Contact Us</b></Link>
        </li>
      </ul>
      <form className="d-flex " role="search">
      <img src={search_icon} alt='Search'/>
        <button className="ms-5 btn text-nowrap" style={{backgroundColor: 'orangered', color:'white'}} type="button">Get a Quote</button>
      </form>
    </div>
  </div>
</nav>




{/* <div style={{
        fontFamily: 'Verdana',
        fontSize: '20px',
        border: '0px',
        backgroundColor: 'rgb(243, 233, 233)',
        textAlign: 'center',
        paddingLeft: '20px'
      }}>
<nav>
            <table>
                <tr> 
                    <td width="50px"><img src={logo} alt='Logo'/></td>
                    <td width="150px"><b>TROPIKO</b></td>
                    <td width="450px"></td>
                    <td width="100px"><a href="index.html">Home</a></td>
                    <td width="100px"><a href="menu.html">Fruits</a></td>
                    <td width="120px"><a href="aboutus.html">Services</a></td>
                    <td width="150px"><a href="timing.html">Contact Us</a></td>
                    <td width="50px"><img src={search_icon} alt='Search'/></td>
                    <td width="180px"><a href="menu.html">
                    <button style={{fontSize:'18px',
                        fontWeight: 'bold',
                        color:'white',
                        backgroundColor:'orangered',
                        border:'0px',
                        padding:'9px 14px'
                    }}>GET A QUOTE</button></a> </td>
                </tr>
            </table>
    </nav>
    </div> */}

</>
  )
}

export default Header;