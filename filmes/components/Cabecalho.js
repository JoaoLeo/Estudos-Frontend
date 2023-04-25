import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Cabecalho = () => {
  return (
  <> 
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Sistema Acadêmico</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/atores">Atores</Nav.Link>
        <NavDropdown title="Filmes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/filmes"> Popular </NavDropdown.Item>
              <NavDropdown.Item href="/filmes/emCartaz"> Em cartaz  </NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamentos"> Lançamento  </NavDropdown.Item>       
              <NavDropdown.Item href="/filmes/topRated"> Top Rated  </NavDropdown.Item>     
        </NavDropdown>    
        <NavDropdown title="Séries" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/series"> Popular </NavDropdown.Item>
              <NavDropdown.Item href="/series/noAr"> No ar  </NavDropdown.Item>       
              <NavDropdown.Item href="/series/topRated"> Top Rated  </NavDropdown.Item>     
        </NavDropdown>           
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Cabecalho