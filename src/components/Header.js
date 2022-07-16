import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";

import Logo from "../assets/images/logo.svg";
import { MenuIcon } from "../assets/icons/icons";
import paths from "../Router/paths.json";

import Sidemenu from "./Sidemenu";

const Header = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  // runs on side menu toggle
  const toggleSidemenu = () => {
    setIsMenuCollapsed(prev => !prev);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Button onClick={toggleSidemenu} variant="outline-secondary" title="menu">
          <MenuIcon />
        </Button>
        <Navbar.Brand href={paths.home}>
          <img
            alt={process.env.REACT_APP_NAME}
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            title={process.env.REACT_APP_NAME}
          />
          {process.env.REACT_APP_NAME}
        </Navbar.Brand>
      </Navbar>
      <Sidemenu
        isMenuCollapsed={isMenuCollapsed}
        toggleSidemenu={toggleSidemenu}
      />
    </header>
  );
};

export default Header;
