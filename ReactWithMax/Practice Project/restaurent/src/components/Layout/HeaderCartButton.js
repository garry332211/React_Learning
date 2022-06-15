
import classes from "./HeaderButton.module.css";
import CardIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContetxt from "../../components/store/cart-context"
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContetxt);
    const numnberOfCartitems = cartCtx.items.reduce((curNumber, item) =>{
        return curNumber + item.amount;
    }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>

      <span>My Cart</span>
      <span className={classes.badge}>{numnberOfCartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
