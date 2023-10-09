import React, { useState, useEffect, useCallback } from 'react'
import { firestore } from '../../../src/Config/firestore'
import { collection, getDocs } from 'firebase/firestore'
import SideNavBar from '../Navbar/SideNavBar'

const StudentPage = () => {

const [todos, setTodos] = useState([])

const getTodos = useCallback(async () => {
  const querySnapshot  = await getDocs(collection(firestore,"studentsystem"));
  const array = []
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    array.push(data);
  })
  setTodos(array);
}, [])

useEffect(() => {
  getTodos();
},)


  return (
    <div>
     <div className="row text-bg-primary p-3"> <h2 style={{color:'white'}}>Student Page</h2></div>
     <SideNavBar />

<div style={{
    position: 'absolute',
    top: '100px',
    left: '400px',
    width: '100%',
    height: '100%',
    alignItems: 'center'}}>

  <div>
    <table style={{alignItems: 'center', borderStyle:'solid', borderWidth:'3px', borderColor:'blue'}}>
      <thead>
        <tr>
          <th>Studdent ID</th>
          <th>Student Name</th>
          <th>Contact Info</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, i) => (
          <tr key={i} style={{alignItems: 'center', borderStyle:'solid', borderWidth:'3px', borderColor:'blue'}}>
            <td style={{alignItems: 'center'}}>{todo.studentId}</td>
            <td>{todo.studentName}</td>
            <td>{todo.contactInfo}</td>
            <td><button className="btn btn-dark">
                   Delete
                 </button>
                 <button
                   type="button"
                   className="btn btn-primary"
                 >
                   Edit
                 </button></td>
          </tr>
        ))}
      </tbody>


    </table>
  </div></div>
);

</div>
  )}

export default StudentPage;