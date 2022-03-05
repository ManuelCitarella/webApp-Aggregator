import React, { Component } from 'react';
import { ProjectV } from './ProjectViewer';
import ProjectData from '../projectData.json';
import * as _ from 'underscore';
import { groupBy } from 'underscore';

export function Test() {
    const ProjectT =[
        {
            "project":"Mars Rover" ,
            "employee":"Mario" ,
            "date":"27 Aug 2021",
            "hours": 5 
        },
        {
            "project":"Manhattan" ,
            "employee":"Giovanni" ,
            "date":"31 Aug 2021",
            "hours": 3
        },
        {
            "project":"Mars Rover" ,
            "employee":"Mario",
            "date":"01 Sep 2021",
            "hours": 3
        },
        {
            "project":"Mars Rover" ,
            "employee":"Lucia" ,
            "date":"01 Sep 2021",
            "hours": 3
        },
        {
            "project":"Manhattan" ,
            "employee":"Mario" ,
            "date":"27 Aug 2021",
            "hours": 2
        },
        {
            "project":"Manhattan" ,
            "employee":"Giovanni" ,
            "date":"01 Sep 2021",
            "hours": 4
        }
];
const projects = Object.keys(ProjectData);
console.log('ma',projects);
var gb =  _.groupBy(ProjectT, ["project"]);
console.log('ciao',gb);
/*
Object.entries(gb).map(([key, value])=>{
  console.log("key:", key, "\nvalue:", value)
})*/

/*
const result = ProjectT.reduce((res, curr) => {
  // build the key (productId + date without the time part)
  const key = `${curr.project}_${curr.hours}`;
  res[key] = res[key] || {
    projectId: curr.project,
    hours: curr.hours,
  };
  // sum durations as integers and convert the sum back to string
  res[key].hours = (+res[key].hours + +curr.hours) + '';
  return res;
}, {});*/

// print only values
//console.log(Object.values(result));

}