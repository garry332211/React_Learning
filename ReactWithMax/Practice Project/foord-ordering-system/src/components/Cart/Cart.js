import Modal from "../UI/Modal";
import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../ContextManagement/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; // displays the totaal amount
  const hasCartHasItems = cartCtx.items.length > 0; // only show Order button if cart contains items / if empty do not show Order

  //Remov Items From The Cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item, id) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal cartCloseBtn={props.cartCloseBtn}>
      <div>{cartItems}</div>

      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className="actions">
        <button onClick={props.cartCloseBtn} className="button--alt">
          Close
        </button>
        {hasCartHasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
