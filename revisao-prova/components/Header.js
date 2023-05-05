import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
  return (
  <> 
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Sistema Acadêmico</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/deputados">Deputados</Nav.Link>    
      </Nav>    
    </Container>
  </Navbar>
  <br/>
  </>
  )
}

export default Header