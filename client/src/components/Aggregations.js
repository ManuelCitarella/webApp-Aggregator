import React, { Component, useEffect, useState } from "react";
import "../App.css";
import _ from "lodash";

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
console.log('Raggruppamento multiplo per employee project', result4.sort((a, b) => a.EmployeeID - b.EmployeeID ));

/* NUOVI METODI
MEGLIO COSì, FUNZIONA MEGLIO PER IL RAGGRUPPAMENTO DOPPIO 
QUESTO è PER PROJECT E EMPLOYEE*/
var helper = {};
var Newresult = ProjectT.reduce(function(r, o) {
  var key = o.project.id + '-' + o.employee.id;
  
  if(!helper[key]) {
    helper[key] = Object.assign({}, o); // create a copy of o
    r.push(helper[key]);
  } else {
    helper[key].hours += o.hours;
  }

  return r;
}, []);

console.log('N Raggruppamento multiplo project + employee', Newresult.sort((a, b) => a.project.id- b.project.id));

/*MEGLIO COSì, FUNZIONA MEGLIO PER IL RAGGRUPPAMENTO DOPPIO 
QUESTO è PER EMPLOYEE E PROJECT*/
var helper2 = {};
var Newresult2 = ProjectT.reduce(function(r, o) {
  var key = o.employee.id + '-' + o.project.id;
  
  if(!helper2[key]) {
    helper2[key] = Object.assign({}, o); // create a copy of o
    r.push(helper2[key]);
  } else {
    helper2[key].hours += o.hours;
  }

  return r;
}, []);
var helper3 = Newresult2.sort((a, b) => a.employee.id- b.employee.id);
console.log('N Raggruppamento multiplo employee+project', helper3);
/**da qui */


    return (
        <>
        <div>
            
        </div>
        </>
      );
    };

