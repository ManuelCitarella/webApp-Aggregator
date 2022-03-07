import React from 'react';
import _ from "lodash";
import ProjectData from '../projectData.json';
import { TableOnDate, TableOnEmployee,  TableOnProject, TableOn_Date_Employee, TableOn_Date_Project, TableOn_Employee_Date, TableOn_Employee_Project, TableOn_Project_Date, TableOn_Project_Employee } from './TableViewer';

//var ProjectT = fetch('http://localhost:3001/json')
var ProjectT = ProjectData; // Json Array taken from file 

export class Aggregation extends React.Component {
    constructor() {
    super();
    this.state = {
    isClicked: false,
    comboboxValue1: "",
    comboboxValue2: "",
    }
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
};

    /* Main Aggregation function that checks if there are
       one or two values or none in the comboboxes.
       In this way, if there is only one attribute execute 'AggregationOn1',
       while if there are two attributes execute 'AggregationOn2'
       @Param attribute1 -> first attribute of the table
       @Param attribute2 -> second attribute of the table
       @Return table -> aggregated table on one or two attributes */
    mainAggregation(attribute1, attribute2){
        this.publish();
        if(this.state.comboboxValue2==="N/A" || this.state.comboboxValue2===""){ // if there is a value only in the first combobox
        return this.aggregationOn1(attribute1);
        }
        else{ // if there is a value in every combobox
            return this.aggregationOn2(attribute1,attribute2); 
        }   
    }

    /* Execute Aggregation on only one attribute 
       @Param attribute1 -> attribute of table
       @Return table -> aggregated table on one attribute*/
    aggregationOn1(attribute1){

        var grouping, result, final; // local vars

        grouping =  _.groupBy(ProjectT, attribute1); // groups based on one attribute given using lodash 'groupBy'
        result = _.map(grouping, function(value, key) { // maps the new table on all values
        return { 
                Project: _.reduce(value, function(total, o) { 
                    return o.project.name;
                }, 0), 
                Employee: _.reduce(value, function(total, o) { 
                    return o.employee.name;
                }, 0),
                Date: _.reduce(value, function(total, o) { 
                    return o.date;
                }, 0),  
                Hours: _.reduce(value, function(total, o) { 
                    return total + o.hours;
                }, 0) 
            };
        });
        
        if(attribute1==="project.name"){ // if the selected value is 'Project', displays specific values 
        final = result.map((data, i) => ( // displays new table values on screen
                <div key={i}>
                    <TableOnProject
                    project = {data.Project}
                    hours = {data.Hours}/>
                </div>));
        return final;
        }else if(attribute1==="employee.name"){ // else display on 'Employee'
            final = result.map((data, i) => (
                <div key={i}>
                    <TableOnEmployee
                    employee={data.Employee}
                    hours={data.Hours}/>
                </div>));
        return final;
        }else if(attribute1==="date"){ // else on 'Date'
            final = result.map((data, i) => (
                <div key={i}>
                    <TableOnDate
                    date = {data.Date}
                    hours = {data.Hours}/>
                </div>));
        return final;
        }
    }

    /* Execute Aggregation on two attributes 
       @Param attribute1 -> first attribute of the table
       @Param attribute2 -> second attribute of the table
       @Return table -> aggregated table on two attributes*/
    aggregationOn2(attribute1,attribute2){

        var grouped, newTable, sorted, final; // local vars

        if(attribute1 === "project.name" && attribute2 === "employee.name"){ // if attributes have these values
        
        grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.employee.id}"`); // group on 'attribute1' & 'attribute2'

        newTable = _.map(grouped, function(value, key) { // create the new table based on the two attributes
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

        sorted = newTable.sort((a, b) => a.ProjectID - b.ProjectID); // sort using the first attribute

        return final = sorted.map((data, i) => ( // displays new table values on screen
            <div key={i}>
               <TableOn_Project_Employee // Use the view created in TableViewer.js
               project = {data.Project}
               employee = {data.Employee}
               hours = {data.Hours}/>
            </div>));
           
        }else if(attribute1 === "employee.name" && attribute2 === "project.name"){ // if attributes have these values
            grouped = _.groupBy(ProjectT, item => `"${item.employee.id}+${item.project.id}"`); // Same process

            newTable = _.map(grouped, function(value, key) {
                return{ 
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
            sorted = newTable.sort((a, b) => a.EmployeeID - b.EmployeeID);
            return final = sorted.map((data, i) => (
                <div key={i}>
                   <TableOn_Employee_Project // Use view created in TableViewer.js
                   employee = {data.Employee}
                   project = {data.Project}
                   hours = {data.Hours}/>
                </div>));
              
        }

        if(attribute1 === "project.name" && attribute2 === "date"){ //same control process..
            grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.date}"`);

            newTable = _.map(grouped, function(value, key) {
                return{ 
                    IDGroup: key,
                    ProjectID:  _.reduce(value, function(total, o) { 
                        return o.project.id;
                    }, 0),
                    Project:  _.reduce(value, function(total, o) { 
                        return o.project.name;
                    }, 0),
                    Date:  _.reduce(value, function(total, o) { 
                        return o.date;
                    }, 0),
                    Hours: _.reduce(value, function(total, o) { 
                        return total + o.hours;
                    }, 0) 
                };
                });
            sorted = newTable.sort((a, b) => a.ProjectID - b.ProjectID);
            return final = sorted.map((data, i) => (
                <div key={i}>
                   <TableOn_Project_Date
                   project = {data.Project}
                   date = {data.Date}
                   hours = {data.Hours}/>
                </div>));
        }else if(attribute1 === "date" && attribute2 === "project.name"){
                grouped = _.groupBy(ProjectT, item => `"${item.date}+${item.project.id}"`);

                newTable = _.map(grouped, function(value, key) {
                    return{ 
                        IDGroup: key,
                        ProjectID:  _.reduce(value, function(total, o) { 
                            return o.project.id;
                        }, 0),
                        Date:  _.reduce(value, function(total, o) { 
                            return o.date;
                        }, 0),
                        Project:  _.reduce(value, function(total, o) { 
                            return o.project.name;
                        }, 0),
                        Hours: _.reduce(value, function(total, o) { 
                            return total + o.hours;
                        }, 0)};
                    }
                );
                
                sorted = newTable.sort((a, b) => a.Date - b.Date);
                return final = sorted.map((data, i) => (
                    <div key={i}>
                       <TableOn_Date_Project
                       date = { data.Date}
                       project = {data.Project}
                       hours = {data.Hours}/></div>));
        }

        if(attribute1 === "date" && attribute2 === "employee.name"){
            
            grouped = _.groupBy(ProjectT, item => `"${item.date}+${item.employee.name}"`);

            newTable = _.map(grouped, function(value, key) {
                return{ 
                    IDGroup: key,
                    ProjectID:  _.reduce(value, function(total, o) { 
                        return o.project.id;
                    }, 0),
                    Date:  _.reduce(value, function(total, o) { 
                        return o.date;
                    }, 0),
                    Employee:  _.reduce(value, function(total, o) { 
                        return o.employee.name;
                    }, 0),
                    Hours: _.reduce(value, function(total, o) { 
                        return total + o.hours;
                    }, 0) 
                };
                });
            sorted = newTable.sort((a, b) => a.Date - b.Date);
            return final = sorted.map((data, i) => (
                <div key={i}>
                   <TableOn_Date_Employee
                   date={data.Date}
                   employee={data.Employee}
                   hours={data.Hours}/></div>));
        }else if(attribute1 === "employee.name" && attribute2 === "date"){
                grouped = _.groupBy(ProjectT, item => `"${item.employee.name}+${item.date}"`);

                newTable = _.map(grouped, function(value, key) {
                    return{ 
                        IDGroup: key,
                        ProjectID:  _.reduce(value, function(total, o) { 
                            return o.project.id;
                        }, 0),
                        Employee:  _.reduce(value, function(total, o) { 
                            return o.employee.name;
                        }, 0),
                        Date:  _.reduce(value, function(total, o) { 
                            return o.date;
                        }, 0),
                        Hours: _.reduce(value, function(total, o) { 
                            return total + o.hours;
                        }, 0) 
                    };
                });
                sorted = newTable.sort((a, b) => a.Employee - b.Employee);
                return final = sorted.map((data, i) => (
                    <div key={i}>
                       <TableOn_Employee_Date
                       employee={data.Employee}
                       date={data.Date}
                       hours={data.Hours}/>
                    </div>));
        }
    }

    /* See on console the actual values of this class, related to: first and second combobox*/
    publish() {
        console.log('1st value:',this.state.comboboxValue1,'    ','2nd value:', this.state.comboboxValue2);
    }
  
    handleChange({ target }) {
        this.setState({
        [target.name]: target.value
        });
    }

    /*
    handleClick = () => {
        this.setState(prevState => {
        console.log(prevState);
        return { isClicked: !prevState.isClicked };
        });
    };*/

  /**Html code & function execution on page */
  render() {
    return (
    <div>
    <select id="dropdown1" onChange={this.handleChange} name={"comboboxValue1"}>
              <option value="N/A">N/A</option>
              <option value="project.name">Project</option>
              <option value="employee.name">Employee</option>
              <option value="date">Date</option>
    </select>
    <select id="dropdown2" onChange={this.handleChange} name={"comboboxValue2"}>
              <option value="N/A">N/A</option>
              <option value="project.name">Project</option>
              <option value="employee.name">Employee</option>
              <option value="date">Date</option>
    </select>
    <div> {this.mainAggregation(this.state.comboboxValue1, this.state.comboboxValue2)} </div>
    </div>
    );
  }
}