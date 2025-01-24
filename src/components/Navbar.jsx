import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Brand/Logo Section */}
        <Navbar.Brand href="#home">
          <img
            src="/path/to/your/logo.png" // Replace with your logo path
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center" style={{ gap: "40px" }}>
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>

            {/* Dropdown Menu */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-link">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated Link</NavDropdown.Item>
            </NavDropdown>

            {/* Profile Icon (Similar to Facebook) */}
            <Nav.Link href="#profile" className="nav-link">
              <img
                src="/path/to/profile-icon.png" // Replace with your profile icon
                alt="Profile"
                height="30"
                className="rounded-circle"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};