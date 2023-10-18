import React, { useState, useEffect, useCallback } from "react";
import { firestore } from "../../../src/Config/firestore";
import { collection, doc, getDocs } from "firebase/firestore";
import { Nav } from "react-bootstrap";
import { SPage } from "./ModelBox";


const StudentPage = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = useCallback(async () => {
    const querySnapshot = await getDocs(collection(firestore, "studentsystem"));
    const array = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      array.push(data);
    });
    setTodos(array);
  }, []);

  useEffect(() => {
    getTodos();
  });

  const handleDelete = async (todo) => {
    try {
      await getDocs(collection(firestore, "studentsystem", todo.id));
      const todosAfterDelete = todos.filter((t) => t.id !== todo.id);

      setTodos(todosAfterDelete);
      console.log("Document has been deleted");
    } catch (err) {
      console.error("Error: ", err);
    }
  };


  return (
    <div>
      <Nav
        className="navbar navbar-expand-lg bg-primary text-white"
        style={{ width: "82vw" }}
      >
        <div className="mx-auto">
          <h2>Students Page</h2>
        </div>
      </Nav>

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "60%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          
          <div className="col-12 aligncenter">
            <div className="row">
              <button className="btn btn-primary mt-5 mb-3" onClick={SPage}>Add New Student</button>
            </div>
          </div>


          <table className="table tableStriped table-hover text-center fw-semibold me-5 align-middle">
            <thead>
              <tr className="bg-primary">
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Contact Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, i) => (
                <tr key={i}>
                  <td>{todo.studentId}</td>
                  <td>{todo.studentName}</td>
                  <td>{todo.contactInfo}</td>
                  <td>
                    <button type="button" className="btn btn-primary me-3">
                      Edit
                    </button>
                    <button
                      className="btn btn-danger me-2"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
