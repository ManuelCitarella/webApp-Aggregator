export const ProjectV = ({ project, employee, date, hours }) => {
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