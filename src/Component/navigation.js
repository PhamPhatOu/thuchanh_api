import { Container, Nav, Navbar,  } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation(){
return(
    <Navbar bg="light" expand="lg">
    <Container>
        
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/Home">Home</Link>
          <Link className="nav-link" to="/About">About</Link>
          <Link className="nav-link" to="/User">User</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}