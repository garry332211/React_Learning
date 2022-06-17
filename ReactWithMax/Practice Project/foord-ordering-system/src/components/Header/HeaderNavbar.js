import React from 'react'
import "./HeaderNavbar.css";

const HeaderNavbar = ({Icon, title}) => {
  return (
    <div className='headerOption'>

        {Icon && <Icon />}

        <h3 className='headerOption_title'>{title}</h3>
        
    </div>
  )
}

export default HeaderNavbar