import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='Contact'>Contact</Link></Nav.Link>
            <Nav.Link ><Link to='About'>About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
