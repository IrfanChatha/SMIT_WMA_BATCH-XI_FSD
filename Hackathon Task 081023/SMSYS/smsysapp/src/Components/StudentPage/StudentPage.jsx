import SideNavBar from "../Navbar/SideNavBar";

const StudentPage = () => {
  return (

    <div class="container-fluid">
    <div class="row">
    <div class="col-2 text-bg-primary">
   
    <div>
    <div className="row text-bg-primary p-3"> <h2 style={{color:'white'}}>Student Page</h2></div>
     <SideNavBar />
 
     </div></div>
     <div class="col-10">
          
      <table className="d-flex flex-column align-items-center" style={{margin: "" }}>
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
      </div></div></div>
  )
}

export default StudentPage;