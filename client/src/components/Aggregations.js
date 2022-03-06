import React, { Component, useEffect, useState } from "react";
import "../App.css";
import _ from "lodash";

export const DisplayAggregations = () =>{
    var ProjectT = 
    [
        {
            project: { id: 1, name: "Mars Rover" },
            employee: { id: 1, name: "Mario" },
            date: "27 Aug 2021",
            hours: 5 
        },
        {
            project: { id: 2, name: "Manhattan" },
            employee: { id: 2, name: "Giovanni" },
            date: "31 Aug 2021",
            hours: 3
        },
        {
            project: { id: 1, name: "Mars Rover" },
            employee: { id: 1, name: "Mario" },
            date: "01 Sep 2021",
            hours: 3
        },
        {
            project: { id: 1, name: "Mars Rover" },
            employee: { id: 3, name: "Lucia" },
            date: "01 Sep 2021",
            hours: 3
        },
        {
            project: { id: 2, name: "Manhattan" },
            employee: { id: 1, name: "Mario" },
            date: "27 Aug 2021",
            hours: 2
        },
        {
            project: { id: 2, name: "Manhattan" },
            employee: { id: 2, name: "Giovanni" },
            date: "01 Sep 2021",
            hours: 4
        }
];

/*RAGGRUPPAMENTO PER UN SOLO ATTRIBUTO*/ 
//RAGGRUPPAMENTO PER PROJECT NAME
var gb =  _.groupBy(ProjectT, 'project.name');
console.log('ciao',gb);
const gbKey = Object.keys(gb);

var result = _.map(gb, function(value, key) {
    return { 
        Name: key, 
        Hours: _.reduce(value, function(total, o) { 
            return total + o.hours;
        }, 0) 
      };
    });
console.log('Raggruppamento per project', result);
// FINE RAGGRUPPAMENTO

/*RAGGRUPPAMENTO PER + ATTRIBUTI*/ 
const grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.employee.id}"`);
/*PROJECT.ID E EMPLOYEE.ID*/ 
console.log('Raggruppamento multiplo per project employee',grouped);
/*EMPLOYEE.ID E PROJECT.ID*/ 
const grouped2 = _.groupBy(ProjectT, item => `"${item.employee.id}+${item.project.id}"`);
console.log('Raggruppamento multiplo per employee project', grouped2);

// RAGGRUPPAMENTO MULTIPLO PROJECT.ID E EMPLOYEE.ID
var result3 = _.map(grouped, function(value, key) {
    return{ 
        IDGroup: key,
        ProjectID:  _.reduce(value, function(total, o) { 
            return o.project.id;
        }, 0),
        Project:  _.reduce(value, function(total, o) { 
            return o.project.name;
        }, 0),
        Employee:  _.reduce(value, function(total, o) { 
            return o.employee.name;
        }, 0),
        Hours: _.reduce(value, function(total, o) { 
            return total + o.hours;
        }, 0) 
      };
    });
// sort in base all'id
var resultfin = result3.sort((a, b) => a.ProjectID- b.ProjectID);
console.log('Raggruppamento multiplo project + employee', resultfin);

// RAGGRUPPAMNETO MULTIPLO EMPLOYEE.ID E PROJECT.ID
var result4 = _.map(grouped2, function(value, key) {
    return { 
        IDGroup: key,
        EmployeeID:  _.reduce(value, function(total, o) { 
            return o.employee.id;
        }, 0),
        Employee:  _.reduce(value, function(total, o) { 
            return o.employee.name;
        }, 0),
        Project:  _.reduce(value, function(total, o) { 
            return o.project.name;
        }, 0),
        Hours: _.reduce(value, function(total, o) { 
            return total + o.hours;
        }, 0) 
      };
    });

// sort in base all'id
console.log('Raggruppamento multiplo per employee project',result4.sort((a, b) => a.EmployeeID - b.EmployeeID ));

const ReptileList = () => {
    console.log('executed reptiles');
    const reptiles = ["alligator", "snake", "lizard"];
  return (
      <div>
      {reptiles.map((reptile) => (
       <table>
       <tbody>
       <tr>
       <td>
       Reptile
       <h5>{reptile}</h5>
       </td>
       </tr>
       </tbody>
       </table>
      ))}   
    </div>
  );
}
    return (
        <>
        <div>
        <button value="Aggregation" onClick={()=>{console.log('button clicked');
        ReptileList();
        console.log('end function');}}>Generate Aggregation</button>
        </div>
        <div>
            <p>Primo Raggruppamento per progetto</p>
            {result.map((results) => (
               <table>
                <tbody>
                <tr>
                <td>
                Name
                <h5>{results.Name}</h5>
                </td>
                <td>
                Hours
                <h5>{results.Hours}</h5>
                </td>  
                </tr>
                </tbody>
                </table>
            ))}
            
                
            <p>Secondo Raggruppamento per progetto e impiegato</p>
            {resultfin.map((results) => (
               <table>
                <tbody>
                <tr>
                <td>
                Name
                <h5>{results.Project}</h5>
                </td>
                <td>
                Employee
                <h5>{results.Employee}</h5>
                </td>  
                <td>
                Hours
                <h5>{results.Hours}</h5>
                </td>
                </tr>
                </tbody>
                </table>
            ))}

            <p>Terzo Raggruppamento per impiegato e progetto</p>
            {result4.map((results) => (
               <table>
                <tbody>
                <tr>
                <td>
                Employee
                <h5>{results.Employee}</h5>
                </td>
                <td>
                Project
                <h5>{results.Project}</h5>
                </td>  
                <td>
                Hours
                <h5>{results.Hours}</h5>
                </td>
                </tr>
                </tbody>
                </table>
            ))}
        </div>
        </>
      );
    };

