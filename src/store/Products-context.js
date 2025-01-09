import { createContext } from "react";
import CartContext from "./Cart-context";


const ProductsContext=createContext();

export const ProductsContextProvider=(props)=>{
    const items = [
        {
          title: "Colors",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          title: "Black and white Colors",
          price: 50,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          title: "Yellow and Black Colors",
          price: 70,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
          title: "Blue Color",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];

      return <ProductsContext.Provider value={items}>{props.children}</ProductsContext.Provider>
}
export default ProductsContext;