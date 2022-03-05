import React, { Component } from "react";
import "../App.css";
import ProjectData from '../projectData.json';
import { HomePage } from "./Homepage.js"
import { ProjectV } from "./ProjectViewer";
import _ from "lodash";


export const NameList = () =>{
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

/*
const projects = Object.keys(ProjectT[0]);
console.log(projects);

*/

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
console.log('Raggruppamento project', result);
// FINE RAGGRUPPAMENTO

/*RAGGRUPPAMENTO PER + ATTRIBUTI*/ 
const grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.employee.id}"`);
/*PROJECT.ID E EMPLOYEE.ID*/ 
console.log('Raggruppamento multiplo project employee',grouped);
/*EMPLOYEE.ID E PROJECT.ID*/ 
const grouped2 = _.groupBy(ProjectT, item => `"${item.employee.id}+${item.project.id}"`);
console.log('Raggruppamento multiplo employee project', grouped2);

// RAGGRUPPAMENTO MULTIPLO PROJECT.ID E EMPLOYEE.ID
var result3 = _.map(grouped, function(value, key) {
    return { 
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
console.log('Raggruppamento multiplo employee + project',result4.sort((a, b) => a.EmployeeID- b.EmployeeID ));

/*
var secondRes = _.map(grouped2, function(value, key) {
    return { 
        Id: key, 
        Hours: _.reduce(value, function(total, o) { 
            return total + o.hours;
        }, 0) 
      };
    });

console.log(secondRes);*/
/*
const groups = ['project.id', 'employee.id']
ProjectT.forEach(function (a) {
    groups.reduce(function (o, g, i) {                            // take existing object,
        o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {}); // or generate new obj, or
        return o[a[g]];                                           // at last, then an array
    }, grouped).push(a);
});
*/
/*
var result2 = _.map(grouped, function(value, key) {
    return { 
        name: key, 
        hours: _.reduce(value, function(total, o) { 
            return total + o.hours;
        }, 0) 
      };
    });

console.log(result2);*/
/*
    return Object.keys(result).map(function(key) {
        return(result[key]);
    });
*/
    return (
        <>
              {
                  Object.entries(gb).map(([key, value])=>{
                    return (
                        <div key={key}>
                        {value.hours}
                        </div>
                    )
                  })}
        
        </>
      );
    };

