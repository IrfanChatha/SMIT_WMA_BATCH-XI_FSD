import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="text-white"
        style={{
          backgroundColor: "#1a237e",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px blue",
        }}
      >
        Hello World! My NextJS App
      </div>
    </div>
  );
};

export default Home;
