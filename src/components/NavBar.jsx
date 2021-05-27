import React from "react";
import { Navbar,Nav, } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
    
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">LOGO</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/History">History</Nav.Link>
      <Nav.Link href="#home">About Us</Nav.Link>
    </Nav>
  </Navbar>
    </>
  );
};

export default NavBar;
