import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./../assets/images/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/home"}>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/browse"}>
              Browse
            </Nav.Link>
            <Nav.Link as={Link} to={"/details"}>
              Details
            </Nav.Link>
            <Nav.Link as={Link} to={"/streams"}>
              Streams
            </Nav.Link>
            <Nav.Link as={Link} to={"/profile"}>
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
