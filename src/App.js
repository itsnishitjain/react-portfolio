import React from "react";
import Navbar from "./components/navbar";
import Grid from "./components/grid"; // Ensure the correct path
import "./index.css";

function App() {
  const gridTopMargin = "-1.3rem"; // Adjust this value to move the grid closer

  return (
    <div className="lg:h-screen h-full w-full flex flex-col items-center bg-black text-white">
      <div className="w-full">
        <div className="navbar-container flex justify-between items-center mt-8">
          <Navbar />
        </div>
      </div>
      <div
        className="h-full flex-grow flex items-center justify-center w-full"
        style={{ marginTop: gridTopMargin }}
      >
        <Grid />
      </div>
    </div>
  );
}

export default App;
