import React from 'react';
import { useState } from 'react';
import './navbar.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navbaar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Navbar expand="lg" className={navbar ? 'navutama active fixed-top' : 'navutama fixed-top'}>
      <Container>
        <Navbar.Brand href="#home">.ly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className="itemNav">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="itemNav">
              Our Terms
            </Nav.Link>
            <Nav.Link href="#link" className="itemNav">
              Contact
            </Nav.Link>
            <Nav.Link href="#link" className="itemregis">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
