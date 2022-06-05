import {Navbar, Nav, NavDropdown, Container, Badge} from 'react-bootstrap'

function NavBar() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Web-Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#faqs">FAQs</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  <Badge>عربي</Badge>
  </Container>
</Navbar>
  );
}

export default NavBar;
