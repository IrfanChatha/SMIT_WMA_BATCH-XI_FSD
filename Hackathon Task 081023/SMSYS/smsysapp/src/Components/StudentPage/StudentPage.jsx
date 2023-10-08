import React from 'react'
import SideNavBar from '../Navbar/SideNavBar'

const StudentPage = () => {
  return (
    <div>
     <div className="row text-bg-primary p-3"> <h2 style={{color:'white'}}>Student Page</h2></div>
     <SideNavBar />

<div style={{
    position: 'absolute',
    top: '100px',
    left: '20px',
    width: '100%',
    height: '100%',
    alignItems: 'center',
     
}}>
     <table className="d-flex flex-column align-items-center col-12">
         <tr>
           <th className="px-3">Name</th>
           <th className="px-3">Email</th>
           <th className="px-3">Actions</th>
         </tr>
                 <td>
                 <button className="btn btn-dark">
                   Delete
                 </button>
                 <button
                   type="button"
                   class="btn btn-primary"
                 >
                   Edit
                 </button>
               </td>
       </table>
       </div>
   </div>
  )
}

export default StudentPage;