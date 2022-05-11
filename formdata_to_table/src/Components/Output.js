import React from 'react'

const Output = (props) => {

  return (
    <div>

      <table className='customers'>
        <thead>

        
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Email Address</th>
          </tr>

          </thead>

          <tbody>

          
       
          {props.userDetails.map((inputValues,keyProps) =>(

            <tr key={keyProps}>
                <td>{inputValues.id}</td>
                <td>{inputValues.fname}</td>
                <td>{inputValues.lname}</td>
                <td>{inputValues.mobile}</td>
                <td>{inputValues.email}</td>
              </tr>

          ))}
              
              </tbody>
        

    </table>



   
      
        </div>
    
   
    
    
   

   
  )
}

export default Output