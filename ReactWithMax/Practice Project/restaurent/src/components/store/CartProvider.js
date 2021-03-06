import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
  };
const cartReducer = (state, action )=>{
    if(action.type === 'ADD'){
        const upatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.anount
        return {
            items: upatedItems,
            totalAmount:updatedTotalAmount,
        };
    }
  return defaultCartState
}
const CartProvider = props =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item)  =>{
     dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = (id) =>{};
 
    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;