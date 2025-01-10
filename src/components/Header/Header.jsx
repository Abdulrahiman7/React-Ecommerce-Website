import React, { Fragment, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Header = () => {
    const [cartVisible, setCartVisible]=useState(false);
    const cartShowHandler=()=>setCartVisible(true);
    const cartHideHandler=()=>setCartVisible(false);
  return (
    <Fragment>
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">My Ecommerce</Navbar.Brand>
        <Nav className="inline ">
          <Nav.Link className="btn btn-primary text-light me-5" href="/">Home</Nav.Link>
          <Nav.Link className="btn btn-primary text-light me-5" href="/store">Store</Nav.Link>
          <Nav.Link className="btn btn-primary text-light me-5" href="/about">About</Nav.Link>
          <Nav.Link className="btn btn-primary text-light me-5" href="/contact-us">Contact us</Nav.Link>
        </Nav>
        <Nav>
          <Button onClick={cartShowHandler}>Cart</Button>
        </Nav>
      </Container>
    </Navbar>
    <Container fluid className='m-0 mt-1 p-3 full-width ' style={{fontFamily:'Timesnewroman', backgroundColor:'grey', height:'150px'}}>
        <h1 className='mt-4' style={{fontSize:'56px', fontWeight:'bolder', color:'white'}}>The Generics</h1>
    </Container>
    <Cart showModal={cartVisible} closeModal={cartHideHandler} />
    </Fragment>
  );
};

export default Header;
