import React from 'react'
import Heading from '../assets/images/Heading.png'
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
            <a href="index.html" style={{paddingRight:'10px'}}>Home</a>
            <a href="menu.html" style={{paddingRight:'10px'}}>Menu</a>
            <a href="aboutus.html" style={{paddingRight:'10px'}}>About</a>
            <a href="timing.html" style={{paddingRight:'10px'}}>Timings</a>
            <a href="contactus.html" style={{paddingRight:'1px'}}>Contact Us</a>  
        </nav> }

<hr/>

    </div>
  )
}

export default Header