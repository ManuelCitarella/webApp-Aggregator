
export const ProjectV = ({ project, employee, date, hours }) => { // first view of the page, shows the original table
    if (!project) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
            Name
            <h5>{project}</h5>
            </td>
            <td>
            Employee
            <h5>{employee}</h5>
            </td>
            <td>
            Date
            <h4>{date}</h4>
            </td>
            <td>
            Hours
            <p>{hours}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  export const TableOnProject = ({ project, hours }) => { // view only on Project attribute
    if (!project) return <div />;
    return (
      <table>
      <tbody>
      <tr>
      <td>
      Project
      <h5>{project}</h5>
      </td> 
      <td>
      Hours
      <h5>{hours}</h5>
      </td>
      </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnEmployee = ({ employee, hours }) => { // view only on Employee..
    if (!employee) return <div />;
    return (
      <table>
      <tbody>
      <tr>
      <td>
      Employee
      <h5>{employee}</h5>
      </td> 
      <td>
      Hours
      <h5>{hours}</h5>
      </td>
      </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnDate = ({ date, hours }) => {
    if (!date) return <div />;
    return (
      <table>
      <tbody>
      <tr>
      <td>
      Date
      <h5>{date}</h5>
      </td> 
      <td>
      Hours
      <h5>{hours}</h5>
      </td>
      </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnProjectEmployee = ({ project, employee, hours }) => { // view on Project & Employee
    if (!project) return <div />;
    return (
      <table>
      <tbody>
      <tr>
      <td>
      Project
      <h5>{project}</h5>
      </td> 
      <td>
      Employee
      <h5>{employee}</h5>
      </td>
      <td>
      Hours
      <h5>{hours}</h5>
      </td>
      </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnEmployeeProject = ({ employee, project, hours }) => {
    if (!employee) return <div />;
    return (
      <table>
      <tbody>
      <tr>
        <td>
        Employee
        <h5>{employee}</h5>
        </td>
        <td>
        Project
        <h5>{project}</h5>
        </td> 
        <td>
        Hours
        <h5>{hours}</h5>
        </td>
        </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnProjectDate = ({ project, date, hours }) => {
    if (!project) return <div />;
    return (
      <table>
      <tbody>
      <tr>
        <td>
        Project
        <h5>{project}</h5>
        </td>
        <td>
        Date
        <h5>{date}</h5>
        </td> 
        <td>
        Hours
        <h5>{hours}</h5>
        </td>
        </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnDateProject = ({ date, project, hours }) => {
    if (!date) return <div />;
    return (
      <table>
      <tbody>
      <tr>
        <td>
        Date
        <h5>{date}</h5>
        </td> 
        <td>
        Project
        <h5>{project}</h5>
        </td>
        <td>
        Hours
        <h5>{hours}</h5>
        </td>
        </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnDateEmployee = ({ date, employee, hours }) => {
    if (!date) return <div />;
    return (
      <table>
      <tbody>
      <tr>
        <td>
        Date
        <h5>{date}</h5>
        </td> 
        <td>
        Employee
        <h5>{employee}</h5>
        </td>
        <td>
        Hours
        <h5>{hours}</h5>
        </td>
        </tr>
      </tbody>
      </table>
    );
  };

  export const TableOnEmployeeDate = ({ employee, date, hours }) => {
    if (!employee) return <div />;
    return (
      <table>
      <tbody>
      <tr>
        <td>
        Employee
        <h5>{employee}</h5>
        </td>
        <td>
        Date
        <h5>{date}</h5>
        </td> 
        <td>
        Hours
        <h5>{hours}</h5>
        </td>
        </tr>
      </tbody>
      </table>
    );
  };


  
  