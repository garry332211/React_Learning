import React from 'react'

const Output = (props) => {

  return (
    <div className='box'>


       
  {props.entries.map((newEntry,index) =>(
   <h1  key={index} > 
      {newEntry.entry}</h1>
   

))}
    

       
    </div>
  )
}

export default Output