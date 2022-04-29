import React from "react";

const NewData = (props) => {
  return (
    <div>
      <table className="customers">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        </thead>

        <tbody>
            {props.userDetails.map((details) =>(

           
        <tr>
            <td>{details.firstName}</td>
            <td>{details.lastName}</td>
            <td>{details.email}</td>
        </tr> 
        ))}
        </tbody>

      </table>
     

    </div>
  );
};

export default NewData;
