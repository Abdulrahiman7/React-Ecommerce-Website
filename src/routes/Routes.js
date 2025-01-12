import React, { useContext } from 'react';
import Header from "../components/Header/Header";
import ItemsList from "../components/ItemsList/ItemsList";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "../components/About/About";
import HomePage from "../components/HomePage/HomePage";
import Cart from "../components/Cart/Cart";
import ContactUs from "../components/ContactUs/ContactUs";
import ItemPage from "../components/ItemsList/ItemPage";
import NotFound from "../components/Errors/NotFound";
import Login from "../components/User/Login";
import SignUp from "../components/User/SignUp";
import Profile from "../components/User/Profile/Profile";
import AuthContext from '../store/Auth-context';
const Routes = () => {
    const {isLoggedIn}=useContext(AuthContext);
  return (
    <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/store" exact component={ItemsList} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/store/:productId" component={ItemPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            {isLoggedIn && <Route path="/profile" component={Profile} />}
            {!isLoggedIn && <Redirect to='/login' />}
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
  )
}

export default Routes