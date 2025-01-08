import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>

        <Navbar.Brand href="/">My Ecommerce</Navbar.Brand>
        <Nav className="inline ">
          <Nav.Link className="btn btn-primary text-light me-5" href="/">Home</Nav.Link>
          <Nav.Link className="btn btn-primary text-light me-5" href="/store">Store</Nav.Link>
          <Nav.Link className="btn btn-primary text-light me-5" href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link  href="/cart" className="btn btn-danger px-3 text-light" >Cart</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default Header;
