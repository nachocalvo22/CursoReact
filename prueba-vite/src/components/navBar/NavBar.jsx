import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../images/logo.svg'

const NavBar = () => {
    return (
<Navbar collapseOnSelect expand="lg">
  <Container>
  <NavLink to='/'>La casa de Coco</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Reseñas</Nav.Link>
      <Nav.Link href="#pricing">Historia</Nav.Link>
      <NavDropdown title="Comidas" id="collasible-nav-dropdown">
        <NavLink to='/categoria/Carnes' className={({isActive}) => isActive ? 'clase' : 'clase2'} href="#action/3.1">
             <NavDropdown.Item  href="#action/3.2">Carnes</NavDropdown.Item>
        </NavLink>        
        <NavLink to='/categoria/Pastas' className={({isActive}) => isActive ? 'clase' : 'clase2'} href="#action/3.1">
             <NavDropdown.Item  href="#action/3.2">Pastas</NavDropdown.Item>
        </NavLink>
        <NavLink to='/categoria/Veggie' className={({isActive}) => isActive ? 'clase' : 'clase2'} href="#action/3.1">
             <NavDropdown.Item  href="#action/3.2">Veggie</NavDropdown.Item>
        </NavLink>        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
  <Link to='/cart'>
      <CartWidget/>    
  </Link>
  </Container>
</Navbar>
    )
}

export default NavBar