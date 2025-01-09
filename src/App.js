import "./App.css";
import Button from "react-bootstrap/Button"; // Import from react-bootstrap
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import { CartContextProvider } from "./store/Cart-context";
import { ProductsContextProvider } from "./store/Products-context";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Header></Header>
          <ItemsList></ItemsList>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
