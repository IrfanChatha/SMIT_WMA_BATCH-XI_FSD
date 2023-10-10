import React from "react";
import { Nav } from "react-bootstrap";

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
    </div>
  );
};

export default Dashboard;
