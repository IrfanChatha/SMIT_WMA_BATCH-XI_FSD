import React from 'react'

const ContactusPage = () => {
  return (
    <div>

<h3 style={{textAlign:'center'}}>Contact Us</h3>

<form style={{marginLeft:'40%', marginRight:'80vh'}}>
        Name: <input type="text"/> <br/><br/>
        Email: <input type="email"/> <br/><br/>
        <textarea rows="8" cols="28">Enter your Message Here</textarea>
        <button type="button">Send Message</button>
</form>






    </div>
  )
}

export default ContactusPage