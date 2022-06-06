import React from 'react'
import styles from "./BirthdayDate.module.css"
function BirthdayDisplayer(props) {
  return (
 
<div className={styles.item}>
  
           <h1> {props.name }</h1>
         
          <h3>{ props.birthdayDate}</h3>
          
          <h2>{props.bdayMonth}</h2>
      
     
    </div>
  )
}

export default BirthdayDisplayer

