import React from 'react'
import "./Header.css"
import HeaderNavbar from './HeaderNavbar'

//Importing Icons
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ButtonHeader from './ButtonHeader';
const Header = () => {
  return (
    <>
        <header className="header">
            <h1>Food Mania</h1>
            <div className="header_left">
            <img src="https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-1.png" alt="" />
            </div>

            <div className="header_right">
            <HeaderNavbar  Icon ={RestaurantMenuIcon} title="Menu"/>
            <HeaderNavbar  Icon ={LocationOnIcon} title="Find A Store"/>
            <div className="header_button">
            <ButtonHeader></ButtonHeader>
            </div>
            </div>
    

   
    </header>
    </>
  )
}

export default Header