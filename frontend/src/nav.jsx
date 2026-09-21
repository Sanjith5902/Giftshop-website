
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Routes, Route,Link } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import reactLogo from "./assets/logo1.png";
import './nav.css'
function NavScrollExample() {
     return (
    <>
    <Navbar expand="lg" className="menu-bar">
  <Container fluid>

    <Navbar.Brand href="#home" className="navbar-brand">
      <img
        alt="Joy Box"
        src={reactLogo}
        className="d-inline-block align-top" style={{ width: 150, height: 80}}
      />
      
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />

    <Navbar.Collapse id="navbarScroll">

      <Nav
        className="mx-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/shopping">Shop</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
       
        <Nav.Link href="#action4">Contact</Nav.Link>
      </Nav>

      <Form className="d-flex">
        
        <Button >
          <i className="bi bi-cart"></i>
        </Button>
        <Button >
          <i className="bi bi-person"></i>
        </Button>
      </Form>

    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
  
}

export default NavScrollExample;