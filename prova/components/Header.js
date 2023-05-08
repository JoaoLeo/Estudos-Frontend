import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = (props) => {
  return (
  <> 
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Animes</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/"> Inicio</Nav.Link>
        <Nav.Link href="/animes"> Animes</Nav.Link>  
        <Nav.Link href="/generos"> Gêneros </Nav.Link> 
      </Nav>    
    </Container>
  </Navbar>
  <div className='bg-secondary text-white py-3 text-center mb-3'>
    <h1> {props.titulo}  </h1>
    </div>
  <br/>
  </>
  )
}

export default Header