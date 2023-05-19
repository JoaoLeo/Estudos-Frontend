import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/atores">Disciplinas</Nav.Link>
            <Nav.Link href="/atores">Alunos</Nav.Link>
            <Nav.Link href="/atores">Professores</Nav.Link>
            <Nav.Link href="/atores">Turmas</Nav.Link>
            <Nav.Link href="/atores">Salas</Nav.Link>
            <Nav.Link href="/atores">Semestres</Nav.Link>
          
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho