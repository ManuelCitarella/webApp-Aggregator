import React from 'react';
import _ from "lodash";
import ProjectData from '../projectData.json';

var ProjectT = ProjectData;

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
    
    Aggregation(attribute1, attribute2){
        if(this.state.comboboxValue2=="N/A" || this.state.comboboxValue2==""){
        return this.executeAggWithPar(attribute1);}
        else{ 
            return this.AggregationWith2Attributes(attribute1,attribute2);
        }   
    }

    /* Execute Aggregation with only one attribute */
    executeAggWithPar(text1){
        this.publish();
        var grouping =  _.groupBy(ProjectT, text1);

        var result = _.map(grouping, function(value, key) {
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
        
        if(text1=="project.name"){
        const final = result.map((data, i) => (
                <div key={i}>
                    <table>
                    <tbody>
                    <tr>
                    <td>
                    Project
                    <h5>{data.Project}</h5>
                    </td> 
                    <td>
                    Hours
                    <h5>{data.Hours}</h5>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>));
        return final;
        }else if(text1=="employee.name"){
            const final = result.map((data, i) => (
                <div key={i}>
                    <table>
                    <tbody>
                    <tr>
                    <td>
                    Employee
                    <h5>{data.Employee}</h5>
                    </td> 
                    <td>
                    Hours
                    <h5>{data.Hours}</h5>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>));
        return final;
        }else if(text1=="date"){
            const final = result.map((data, i) => (
                <div key={i}>
                    <table>
                    <tbody>
                    <tr>
                    <td>
                    Date
                    <h5>{data.Date}</h5>
                    </td> 
                    <td>
                    Hours
                    <h5>{data.Hours}</h5>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>));
        return final;
        }
    }

    /* Execute Aggregation with two attributes */
    AggregationWith2Attributes(text1,text2){
        if(text1 == "project.name" && text2 == "employee.name"){
        const grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.employee.id}"`);
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
        var resultfin = result3.sort((a, b) => a.ProjectID - b.ProjectID);

        const final = resultfin.map((data, i) => (
            <div key={i}>
               <table>
                <tbody>
                <tr>
                <td>
                Project
                <h5>{data.Project}</h5>
                </td>
                <td>
                Employee
                <h5>{data.Employee}</h5>
                </td>  
                <td>
                Hours
                <h5>{data.Hours}</h5>
                </td>
                </tr>
                </tbody>
                </table>
            </div>
            ));
        return final;   
        }else if(text1 == "employee.name" && text2 == "project.name"){
            const grouped = _.groupBy(ProjectT, item => `"${item.employee.id}+${item.project.id}"`);
            // RAGGRUPPAMENTO MULTIPLO PROJECT.ID E EMPLOYEE.ID
            var result3 = _.map(grouped, function(value, key) {
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
            var resultfin = result3.sort((a, b) => a.EmployeeID - b.EmployeeID);
    
            const final = resultfin.map((data, i) => (
                <div key={i}>
                   <table>
                    <tbody>
                    <tr>
                    <td>
                    Employee
                    <h5>{data.Employee}</h5>
                    </td> 
                    <td>
                    Project
                    <h5>{data.Project}</h5>
                    </td> 
                    <td>
                    Hours
                    <h5>{data.Hours}</h5>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                ));
            return final;   
        }

        if(text1 == "project.name" && text2 == "date"){
            const grouped = _.groupBy(ProjectT, item => `"${item.project.id}+${item.date}"`);
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
                    Date:  _.reduce(value, function(total, o) { 
                        return o.date;
                    }, 0),
                    Hours: _.reduce(value, function(total, o) { 
                        return total + o.hours;
                    }, 0) 
                };
                });
            var resultfin = result3.sort((a, b) => a.ProjectID - b.ProjectID);
    
            const final = resultfin.map((data, i) => (
                <div key={i}>
                   <table>
                    <tbody>
                    <tr>
                    <td>
                    Project
                    <h5>{data.Project}</h5>
                    </td>
                    <td>
                    Date
                    <h5>{data.Date}</h5>
                    </td>  
                    <td>
                    Hours
                    <h5>{data.Hours}</h5>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                ));
            return final;   
        }else if(text1 == "date" && text2 == "project.name"){
                const grouped = _.groupBy(ProjectT, item => `"${item.date}+${item.project.id}"`);
                // RAGGRUPPAMENTO MULTIPLO PROJECT.ID E EMPLOYEE.ID
                var result3 = _.map(grouped, function(value, key) {
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
                        }, 0) 
                    };
                    });
                var resultfin = result3.sort((a, b) => a.Date - b.Date);
        
                const final = resultfin.map((data, i) => (
                    <div key={i}>
                       <table>
                        <tbody>
                        <tr>
                        <td>
                        Date
                        <h5>{data.Date}</h5>
                        </td> 
                        <td>
                        Project
                        <h5>{data.Project}</h5>
                        </td> 
                        <td>
                        Hours
                        <h5>{data.Hours}</h5>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    ));
                return final;   
        }

        if(text1 == "date" && text2 == "employee.name"){
            const grouped = _.groupBy(ProjectT, item => `"${item.date}+${item.employee.name}"`);
            // RAGGRUPPAMENTO MULTIPLO PROJECT.ID E EMPLOYEE.ID
            var result3 = _.map(grouped, function(value, key) {
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
            var resultfin = result3.sort((a, b) => a.Date - b.Date);
    
            const final = resultfin.map((data, i) => (
                <div key={i}>
                   <table>
                    <tbody>
                    <tr>
                    <td>
                    Date
                    <h5>{data.Date}</h5>
                    </td>  
                    <td>
                    Employee
                    <h5>{data.Employee}</h5>
                    </td>
                    <td>
                    Hours
                    <h5>{data.Hours}</h5>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                ));
            return final;   
        }else if(text1 == "employee.name" && text2 == "date"){
                const grouped = _.groupBy(ProjectT, item => `"${item.employee.name}+${item.date}"`);
                // RAGGRUPPAMENTO MULTIPLO PROJECT.ID E EMPLOYEE.ID
                var result3 = _.map(grouped, function(value, key) {
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
                var resultfin = result3.sort((a, b) => a.Employee - b.Employee);
        
                const final = resultfin.map((data, i) => (
                    <div key={i}>
                       <table>
                        <tbody>
                        <tr>
                        <td>
                        Employee
                        <h5>{data.Employee}</h5>
                        </td> 
                        <td>
                        Date
                        <h5>{data.Date}</h5>
                        </td> 
                        <td>
                        Hours
                        <h5>{data.Hours}</h5>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    ));
                return final;   
        }
    }

    publish() {
        console.log( this.state.comboboxValue1, this.state.comboboxValue2, this.state.aggregationValue);
    }
  
    handleClick = () => {
        this.setState(prevState => {
        console.log(prevState);
        return { isClicked: !prevState.isClicked };
        });
    };

    handleChange({ target }) {
        this.setState({
        [target.name]: target.value
        });
    }

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
        <div>
            {this.Aggregation(this.state.comboboxValue1, this.state.comboboxValue2)}          
        </div>
    </div>
    );
  }
}