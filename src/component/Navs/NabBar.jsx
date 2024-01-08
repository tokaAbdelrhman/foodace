import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../img/logo.png';
import './NavBar.css';
function NavBar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand  className="logo" href="#home">
            <img alt="" title="logo" src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" >About Us</Nav.Link>
            <Nav.Link href="#link" >Explore Food</Nav.Link>
            <Nav.Link href="#link" >Review</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link id="call">01557088484</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;