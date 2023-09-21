import React from 'react'


const Header = () => {
  return (
    <div>



<img src={require('../assets/images/Heading.png')} alt="Sir Umair Azmat" className="headerStyle" img/>


        { <nav>
             <a href="index.html">Home</a>
             <a href="menu.html">Menu</a>
            <a href="aboutus.html">About</a>
            <a href="timing.html">Timings</a>
            <a href="contactus.html">Contact Us</a>  
        </nav> }


    </div>
  )
}

export default Header