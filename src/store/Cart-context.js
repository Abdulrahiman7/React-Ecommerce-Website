import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  //adding new item to cart
  const addToCartHandler = (item) => {
    setItems((prev) => [...prev, item]);
  };
  //removing item from cart
  const removeFromCartHandler=(id)=>{
    setItems((prev)=>prev.filter((item)=>item.id != id));
  }
  const cartItem = {
    items: items,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return <CartContext.Provider value={cartItem}>{props.children}</CartContext.Provider>
};

export default CartContext;