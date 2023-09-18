import React from 'react'

const Header = () => {
  return (
    <div>

<img src={require("assets/Heading.png")} alt="Umar's Cuisine"/>
<hr>
        <nav>
            <a href="index.html">Home</a>
            <a href="menu.html">Menu</a>
            <a href="aboutus.html">About</a>
            <a href="timing.html">Timings</a>
            <a href="contactus.html">Contact Us</a>
        </nav>
</hr>

    </div>
  )
}

export default Header