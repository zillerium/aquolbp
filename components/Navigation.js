import React, { useState, useContext } from "react";
import Link from 'next/link';
import { Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap';
import { WalletContext } from "../lib/WalletContext";

const Navigation = () => {
const { userAddress, setUserAddress } = useContext(WalletContext);
  const changeSkin = (colorScheme) => {
    document.body.className = colorScheme;
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link as={Link} href="/" passHref>
	  <img src="/aquologo.png" alt="Logo" className="logo-img" />
	  </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/" passHref>Home</Nav.Link>
          <Nav.Link as={Link} href="/Liquidity" passHref>Liquidity</Nav.Link>
          <Nav.Link as={Link} href="/Trade" passHref>Trade</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

