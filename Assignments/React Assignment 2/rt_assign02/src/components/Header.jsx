import React from 'react'
import Heading from '../assets/images/Heading.png'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{textAlign: 'center'}}>

<img
    src={Heading}
    alt="Sir Umair Azmat"
    style={{
      width: '300px',
      height: 'auto',
      margin: '10px',
      textAlign: 'center'
    }}
/>
        { <nav>
            <Link to="/" style={{paddingRight:'10px'}}>Home</Link>
            <Link to="../MenuPage" style={{paddingRight:'10px'}}>Menu</Link>
            <Link to="../TimingPage" style={{paddingRight:'10px'}}>Timings</Link>
            <Link to="../AboutPage" style={{paddingRight:'10px'}}>About Us</Link>
            <Link to="../ContactusPage" style={{paddingRight:'1px'}}>Contact Us</Link>  
        </nav> 
      }

<hr/>

    </div>
  )
}

export default Header