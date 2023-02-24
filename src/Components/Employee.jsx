import React from "react";

const Employee = props => {
  let data = props.emp;
  console.log(data);
  return (
    <div>
      <table className="table_class">
        <th>emp_id</th>
        <th> emp_name </th>
        <th>emp_salary</th>
        <th>emp_designation</th>
        <th> emp_gender</th>
        <th> emp_education</th>
        <th>emp_ex</th>
        <th>companies</th>
        <th> emp_skills</th>
        <th>emp_city</th>
        <th>emp_image</th>
       
          
    
        {data.map(x => {
          return (
            <tr>
              <td>{x.emp_id}</td>
              <td>{x.emp_name}</td>
              <td>{x.emp_salary}</td>
              <td>{x.emp_designation}</td>
              <td>{x.emp_gender}</td>
              <td>{x.emp_education}</td>
              <td>{x.emp_ex}</td>
              <td>
                Previous : {x.companies.previous} <br /> Current :
                {x.companies.present}
              </td>
              <td>
                {x.emp_skills.map(skill => {
                  return <li>{skill}</li>;
                })}
              </td>
              <td>{x.emp_city}</td>x
              <td>
                <img src={x.emp_image} alt="" />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Employee;
