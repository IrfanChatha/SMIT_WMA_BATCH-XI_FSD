import React from 'react'

const TimingPage = () => {
  return (
    <div style={{textAlign:'center'}}>
  
  <h2>Opening Hours</h2>

<table style={{textAlign:'center', margin:'0', borderWidth:'2px', borderStyle:'solid'}}>
        <tr style={{borderWidth:'2px', borderStyle:'solid'}}> 
            <th width="250px">Monday - Thursday</th>
            <td width="150px">9am - 10pm</td>
        </tr>
        <tr style={{borderWidth:'2px', borderStyle:'solid'}}>
            <th width="250px">Friday</th>
            <td width="150px">9am - 11pm</td>
        </tr>
        <tr style={{borderWidth:'2px', borderStyle:'solid'}}>
            <th width="250px">Saturday</th>
            <td width="150px">Closed</td>
        </tr>
        <tr style={{borderWidth:'2px', borderStyle:'solid'}}>
            <th width="250px">Sunday</th>
            <td width="150px">9am - 12am</td>
        </tr>
    </table>





    </div>
  )
}

export default TimingPage