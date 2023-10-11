import React, { useState, useEffect, useCallback } from "react";
import { firestore } from "../../../src/Config/firestore";
import { collection, getDocs } from "firebase/firestore";
import { Nav } from "react-bootstrap";

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
                    <button className="btn btn-danger me-2">Delete</button>
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
