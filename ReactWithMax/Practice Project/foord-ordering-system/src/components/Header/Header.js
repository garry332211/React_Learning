import React,{useContext} from "react";
import CartContext from "../ContextManagement/cart-context";

import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Burger from "./headerLogo.png";

const Header = (props) => {

      const cartCtx =  useContext(CartContext)

      //to add number of cart items 
      const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount; 
      },0);

  return (
    <>
      <header className="header">
        <h1>Food Mania</h1>
        
          <img src={Burger} alt="" />
       

        <div className="header_right">
          <button onClick={props.openCart} className="button">
            <span className="icon"><ShoppingCartIcon /></span>
            <span className="badge">{numberOfCartItems}</span>
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
