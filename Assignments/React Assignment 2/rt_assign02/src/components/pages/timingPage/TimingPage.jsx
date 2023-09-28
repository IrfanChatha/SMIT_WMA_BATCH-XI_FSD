import React from 'react'

const TimingPage = () => {
  return (
    <div style={{textAlign:'center'}}>
  
<h2>Opening Hours</h2>

<table style={{textAlign:'center', marginLeft:'35%', marginRight:'35%', borderWidth:'2px', borderStyle:'solid'}}>
        <tr> 
            <th style={{borderWidth:'2px', borderStyle:'solid', width:'350px'}}>Monday - Thursday</th>
            <td style={{borderWidth:'2px', borderStyle:'solid', width:'250px'}}>9am - 10pm</td>
        </tr>
        <tr>
            <th style={{borderWidth:'2px', borderStyle:'solid', width:'350px'}}>Friday</th>
            <td style={{borderWidth:'2px', borderStyle:'solid', width:'250px'}}>9am - 11pm</td>
        </tr>
        <tr>
            <th style={{borderWidth:'2px', borderStyle:'solid', width:'350px'}}>Saturday</th>
            <td style={{borderWidth:'2px', borderStyle:'solid', width:'250px'}}>Closed</td>
        </tr>
        <tr>
            <th style={{borderWidth:'2px', borderStyle:'solid', width:'350px'}}>Sunday</th>
            <td style={{borderWidth:'2px', borderStyle:'solid', width:'250px'}}>9am - 12am</td>
        </tr>
    </table>

    </div>
  )
}

export default TimingPage