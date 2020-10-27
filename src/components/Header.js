import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            alt={process.env.REACT_APP_NAME}
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            title={process.env.REACT_APP_NAME}
          />
          Phani's app collage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {/* <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
