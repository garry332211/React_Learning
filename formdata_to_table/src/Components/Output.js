import React from 'react'
import "../Components/styles.css";

function Output(props) {
  return (
    <div>
        <table id='customers'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Number</th>
                </tr>
            </thead>

            <tbody>
                {props.inputDetails.map((details,index) =>
              
                <tr key={index}>
                    <td>{details.id}</td>
                    <td>{details.name}</td>
                    <td>{details.email}</td>
                    <td>{details.number}</td>
                </tr>

        )}
                
            </tbody>
        </table>
    </div>
  )
}

export default Output;