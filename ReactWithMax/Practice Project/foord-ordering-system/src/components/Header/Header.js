import React from "react";
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Burger from "./headerLogo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Food Mania</h1>
        <div className="header_left">
          <img src={Burger} alt="" />
        </div>

        <div className="header_right">
          <button className="button">
            <span className="icon"><ShoppingCartIcon /></span>
            <span className="badge">34</span>
          </button>
        </div>
      </header>

      {/* Adding Image in the Under The Header */}
      <div className="main-image">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg"
          alt="coverImage"
        />
      </div>
    </>
  );
};

export default Header;
