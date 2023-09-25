import React from 'react'


const Header = () => {
  return (
    <div>



<img
    src={require('../assets/images/Heading.png')}
    alt="Sir Umair Azmat"
    className={"headerStyle"}
    // style={{
    //     width: '300px', /* Set your desired width */
    //     height: 'auto', /* Maintain the aspect ratio */
    //     margin: '10px', /* Add margin around the image */
    //     alignText: 'center' /* Add more styling properties as needed */
    // }}
/>
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