import React from 'react'

function BirthdayDisplayer(props) {
  return (
    <div>
          <p>{props.name } 
          { props.birthdayDate}
          {props.bdayMonth}</p>
    </div>
  )
}

export default BirthdayDisplayer