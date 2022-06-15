import React from "react";

const CartContetxt = React.createContext({
    items: [{}],
    totalAmount: 0,
    additem: (item) =>{},
    removeItem: (id) =>{}
})

export default CartContetxt;