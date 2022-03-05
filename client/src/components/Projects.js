import React from "react";
import "../App.css";
import ProjectData from '../projectData.json';
import { HomePage } from "./Homepage.js"
import { ProjectV } from "./ProjectViewer";

export const ProjectsPage = () => {
  return (
    <>
    <HomePage/>
      <div className="project-container">
          {
              ProjectData.map((data,key)=>{
                  return(
                      <div key={key}>
                        <ProjectV
                        key={key}
                        project = {data.project.name}
                        employee = {data.employee.name} 
                        date = {data.date} 
                        hours = {data.hours}
                        />
                      </div>
                  );
              })}
      </div>
      <input 
        type="text" 
        name="payloadBox" 
        placeholder="Enter first attribute"
      />
      <input 
        type="text" 
        name="payloadBox" 
        placeholder="Enter second attribute"
      />
      <button value="Send">Publish</button>
    </>
  );
};