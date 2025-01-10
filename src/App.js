import "./App.css";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import { CartContextProvider } from "./store/Cart-context";
import { ProductsContextProvider } from "./store/Products-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
 const router=createBrowserRouter([
  {path:'/store', element:<ItemsList />},
  {path:'/about', element:<About />},
  {path:'/', element:<HomePage />},
  {path:'/cart', element:<Cart />},
  {path:'/contact-us',element:<ContactUs />}
 ])
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Header />

          <RouterProvider router={router} />

        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
