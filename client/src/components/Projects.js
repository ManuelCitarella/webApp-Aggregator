import React from "react";
import "../App.css";
import ProjectData from '../projectData.json';
import { HomePage } from "./Homepage.js"
import { ProjectV } from "./TableViewer";

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
      <div><h2>Select one or more attributes</h2></div>
    </>
  );
};
