import "./App.css";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import { CartContextProvider } from "./store/Cart-context";
import { ProductsContextProvider } from "./store/Products-context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import ContactUs from "./components/ContactUs/ContactUs";
import ItemPage from "./components/ItemsList/ItemPage";
import NotFound from "./components/Errors/NotFound";



function App() {
  
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/store" exact component={ItemsList} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/store/:productId" component={ItemPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>

        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
