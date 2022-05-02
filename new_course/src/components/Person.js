

import React from 'react'

const Person = (props) => {
  return (
    <div className="container">
            
           <h1>First Name </h1><h4>{props.name}</h4>
     
    </div>
  )
}

export default Person