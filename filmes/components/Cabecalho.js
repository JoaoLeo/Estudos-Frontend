import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

const Cabecalho = () => {
  return (
  <> 
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Sistema Acadêmico</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/filmes">Filmes</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Cabecalho