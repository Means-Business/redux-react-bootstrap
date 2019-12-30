import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../bunchee-online-logo2.svg';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="moocoding header"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Redux React Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        เมนู
      </Navbar.Collapse>
    </Navbar>
  );
}
