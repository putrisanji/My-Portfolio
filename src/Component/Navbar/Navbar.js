import React from "react";
import { Container, Nav } from "react-bootstrap";

import "./Navbar.css"

const Navbar = () => {
  return ( 
    <Container fluid className="navigasi">
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="#" style={{color: "white"}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" style={{color: "white"}}>Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" style={{color: "white"}}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" style={{color: "white"}}>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>

  );
};

export default Navbar
