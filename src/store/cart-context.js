import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    deleteItem: (id) => {},
    deleteAll: () => {},
});

export default CartContext;
