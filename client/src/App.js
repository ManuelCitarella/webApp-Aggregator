// client/src/App.js
import React from "react";

import "./App.css";
import { ProjectsPage } from "./components/Projects";
import { Test } from "./components/Choice";
import { NameList } from "./components/ProjectAgg";

function App() { 
  return (
    <div className="App">
    <ProjectsPage/>
    <NameList/>
    
       
    </div>
    );
}

export default App