import React, { Fragment, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import {NavLink , useLocation} from "react-router-dom";

const Header = () => {
    const [cartVisible, setCartVisible]=useState(false);
    const cartShowHandler=()=>setCartVisible(true);
    const cartHideHandler=()=>setCartVisible(false);

  return (
  
    <Fragment>
     <Navbar bg="dark" variant="dark" expand="lg" style={{display:'flex', justifyContent:'space-between'}}>
     <Navbar.Brand >
          <NavLink to="/" className="text-white text-decoration-none">My Ecommerce</NavLink>
        </Navbar.Brand>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/"  className="btn btn-outline-light me-3" activeClassName="active">Home</NavLink>
            <NavLink to="/store" activeClassName="active" className="btn btn-outline-light me-3">Store</NavLink>
            <NavLink to="/about" activeClassName="active" className="btn btn-outline-light me-3">About</NavLink>
            <NavLink to="/contact-us" activeClassName="active" className="btn btn-outline-light me-3">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLink to="/login" activeClassName="active" className="btn btn-outline-light me-3">Login</NavLink>
        <NavLink to="/profile" activeClassName="active" className="btn btn-outline-light me-3">profile</NavLink>
      </Container>
      <Nav>
        <Button variant="primary" onClick={cartShowHandler}>Cart</Button>
      </Nav>
    </Navbar>
    <Container fluid className='m-0 mt-1 p-3 full-width ' style={{fontFamily:'Timesnewroman', backgroundColor:'grey', height:'150px'}}>
        <h1 className='mt-4' style={{fontSize:'56px', fontWeight:'bolder', color:'white'}}>The Generics</h1>
    </Container>
    <Cart showModal={cartVisible} closeModal={cartHideHandler} />
    </Fragment>
  );
};

export default Header;
