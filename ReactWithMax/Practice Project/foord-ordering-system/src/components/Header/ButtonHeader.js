import React from 'react'
import CardIcon from "../Cart/CartIcon";
import "./Button.css";
const ButtonHeader = (props) => {
  return (
    <div>
          <button className="button" onClick={props.onClick}>
      <span className="icon">
      <CardIcon />
      </span>

      <span>My Cart</span>
      <span className="badge"></span>
    </button>
  
    </div>
  )
}

export default ButtonHeader