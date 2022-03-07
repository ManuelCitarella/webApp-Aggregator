// client/src/App.js
// Main page that groups all
import React from "react";
import "./App.css";
import { ProjectsPage } from "./components/Projects";
import { Aggregation } from "./components/Aggregation";

function App() { 
  return (
    <div className="App">
    <ProjectsPage/>
    <Aggregation/>
    </div>
    );
}

export default App