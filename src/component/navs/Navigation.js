/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container>
        <div className="logo">
          <Navbar.Brand href="#home">
            <img src="http://demo.tutsflow.com/foodera/images/logo.png"></img>
          </Navbar.Brand>
        </div>
        <div className="nav-content">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto list">
              <Nav.Link href="#home" className="li">Home</Nav.Link>
              <Nav.Link href="#about-us" className="li">About Us</Nav.Link>
              <Nav.Link href="#explore-food" className="li">Explore Food</Nav.Link>
              <Nav.Link href="#review" className="li">Review</Nav.Link>
              <Nav.Link href="#faq" className="li">FAQ</Nav.Link>
              <button className="btn">01021068752</button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
