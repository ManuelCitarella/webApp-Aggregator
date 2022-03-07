import React, { Component, useEffect, useState } from "react";
import "../App.css";
import _ from "lodash";

/*This is only a test file to test and create new aggregation functions  */

export const DisplayAggregations = () =>{
  //var ProjectT = fetch('http://localhost:3001/json')
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

/*Groupby for only one attribute
  For: project_name*/ 
var gb =  _.groupBy(ProjectT, 'project.name');
console.log('grouping is:',gb);
const gbKey = Object.keys(gb);

var result = _.map(gb, function(value, key) {
    return { 
        Name: key, 
        Hours: _.reduce(value, function(total, o) { 
            return total + o.hours;
        }, 0) 
      };
    });
console.log('Grouping for project', result);

/*Groupby for more attributes*/ 
const grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.employee.id}"`);
console.log('groupby on more attributes: project + employee',grouped);
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
// Sorting
var resultfin = result3.sort((a, b) => a.ProjectID- b.ProjectID);
console.log('groupby after sort: project + employee', resultfin);

/* Also, new method for groupby on more attributes 
*/
var helper = {};
var Newresult = ProjectT.reduce(function(r, o) {
  var key = o.project.id + '-' + o.employee.id; // here you can insert the attributes
  
  if(!helper[key]) {
    helper[key] = Object.assign({}, o); // create a copy of o
    r.push(helper[key]);
  } else {
    helper[key].hours += o.hours;
  }

  return r;
}, []);
console.log('New groupby method & sort: project + employee', Newresult.sort((a, b) => a.project.id- b.project.id));
    
return (
        <>
        <div>
        <h2>This is a test file.</h2> 
        </div>
        </>
      );
    };

