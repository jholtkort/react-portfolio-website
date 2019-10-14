import React, { useState } from "react";

import Resume from "../static/josh-holtkort-resume.pdf";
import "./Navigation.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <NavbarBrand href="/">J/H</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-5" navbar>
          <NavItem className="mx-1 mx-xl-5">
            <NavLink href="#home">Home</NavLink>
          </NavItem>

          <NavItem className="mx-1 mx-xl-5">
            <NavLink href="#about">About</NavLink>
          </NavItem>

          <NavItem className="mx-1 mx-xl-5">
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>

          <NavItem className="mx-1 mx-xl-5">
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>

          <NavItem className="mx-1 mx-xl-5">
            <NavLink href={Resume} target="_blank" rel="noopener noreferrer">
              Resume
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
