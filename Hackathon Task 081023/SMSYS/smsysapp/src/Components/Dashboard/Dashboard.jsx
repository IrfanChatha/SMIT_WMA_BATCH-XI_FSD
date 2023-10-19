import React from "react";
import { Nav } from "react-bootstrap";
import UseState from "../UseState/UseState";

const Dashboard = () => {
  return (
    <div>
      <Nav
        className="navbar navbar-expand-lg bg-primary text-white"
        style={{ width: "82vw" }}
      >
        <div className="mx-auto">
          <h2>Dashboard</h2>
        </div>
      </Nav>
      <UseState />
    </div>
  );
};

export default Dashboard;
