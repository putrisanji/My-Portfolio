import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Container fluid className="navigasi">
      <Nav className="justify-content-end">
        <Nav.Item>
          <Link to="home" style={{ color: "white", marginRight:'1.5rem', cursor: "default"}}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="profile" style={{ color: "white", marginRight:'1.5rem', cursor: "default" }}>
            Profile
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="portfolio" style={{ color: "white", marginRight:'1.5rem', cursor: "default" }}>
            Portfolio
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="contact" style={{ color: "white", marginRight:'1.5rem', cursor: "default" }}>
            Contact
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Navbar;
