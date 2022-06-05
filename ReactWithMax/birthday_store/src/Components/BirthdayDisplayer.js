import React from 'react'

function BirthdayDisplayer(props) {
  return (
 
<div className='container'>
  
           <h1> {props.name }
         
          { props.birthdayDate}
          
          {props.bdayMonth}</h1>
      
     
    </div>
  )
}

export default BirthdayDisplayer

