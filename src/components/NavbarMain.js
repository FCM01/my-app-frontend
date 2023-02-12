import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMain = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Emailer</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Contacts</Nav.Link>
        <Nav.Link href="#features">Appointments</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarMain