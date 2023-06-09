import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Cabecalho = () => {
  return (
    <>
      <Navbar className="mb-4" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>          
            <Nav.Link href="/salas">Salas</Nav.Link>
            <Nav.Link href="/semestres">Semestres</Nav.Link>
          
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho