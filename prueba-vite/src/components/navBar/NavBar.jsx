import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../images/logo.svg'

const NavBar = () => {
    return (
<Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home">La casa de Coco</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Reseñas</Nav.Link>
      <Nav.Link href="#pricing">Historia</Nav.Link>
      <NavDropdown title="Comidas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Carnes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pastas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Veggie</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
  </Container>
  <CartWidget/>
</Navbar>
    )
}

export default NavBar