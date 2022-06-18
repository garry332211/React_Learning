import React from "react";
import "./Header.css";
import HeaderNavbar from "./HeaderNavbar";
import Burger from "./headerLogo.png"

//Importing Icons
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Food Mania</h1>
        <div className="header_left">
          <img
            src={Burger}
            alt=""
          />
        </div>

        <div className="header_right">
          <HeaderNavbar Icon={RestaurantMenuIcon} title="Menu" />
          <HeaderNavbar Icon={LocationOnIcon} title="Find  Stores" />
        </div>
      </header>

      {/* Adding Image in the Under The Header */}
      <div className="main-image">
        <img src="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg" alt="coverImage" />
      </div>
    </>
  );
};

export default Header;
