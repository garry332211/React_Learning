import React from 'react'
import "./Testing.css";

const TestingCard = (props) => {
  return (
    <div className='testing'>
   


        <div className='tag'>{props.children}</div>
  
    </div>
  )
}

export default TestingCard;