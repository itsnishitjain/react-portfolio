import React from "react";
import Navbar from "./components/navbar";
import Grid from "./components/grid"; // Ensure the correct path
import "./index.css";

function App() {
  // Assuming the margin calculation from Grid.js
  const gridMargin = "calc(15vw - 60px)";

  return (
    <div className="h-full w-full flex flex-col items-center bg-white text-white">
      <div className="w-full">
        <div
          style={{ marginLeft: gridMargin, marginRight: gridMargin }}
          className="flex justify-between items-center mt-8"
        >
          <Navbar />
        </div>
      </div>
      <div className="h-full flex-grow flex items-center justify-center w-full">
        <Grid />
      </div>
    </div>
  );
}

export default App;
