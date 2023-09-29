import React from 'react';
import logo from './assets/images/logo.png';
import search_icon from './assets/images/search_icon.png'

function Header() {
  return (
<div style={{
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
    </div>
  )
}

export default Header;