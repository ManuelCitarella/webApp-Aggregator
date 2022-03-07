// client/src/App.js
// Main page that groups all
import React from "react";
import "./App.css";
import { ProjectsPage } from "./components/Projects";
import { DisplayAggregations } from "./components/Aggregations";
import { Aggregation } from "./components/ButtonClick";

function App() { 
  return (
    <div className="App">
    <ProjectsPage/>
    <Aggregation/>
    </div>
    );
}

export default App