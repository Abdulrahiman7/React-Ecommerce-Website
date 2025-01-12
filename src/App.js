import "./App.css";

import { CartContextProvider } from "./store/Cart-context";
import { ProductsContextProvider } from "./store/Products-context";
import { AuthContextProvider } from "./store/Auth-context";
import Routes from "./routes/Routes";




function App() {

  return (
    <div className="App">
      <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes />

        </CartContextProvider>
      </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
