import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#">Experiances</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar
