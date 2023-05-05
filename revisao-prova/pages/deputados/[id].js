import Header from '@/components/Header'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'

const id = (props) => {
  const deputado = props.deputado
  const despesas = props.despesas
  const profissoes = props.profissoes
  return (
    <>
    <Header/>
    <Container> 
    <Row>

                            <Col md={3}>       
                            <Card className='mt-4'> 
                            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} title={deputado.nomeCivil} />
                            <Card.Body> 
                              <Card.Title>{deputado.ultimoStatus.nome}</Card.Title>
                              <p> Partido: {deputado.ultimoStatus.siglaPartido}</p>
                              <p> UF partido: {deputado.ultimoStatus.siglaUf} </p>
                              </Card.Body>
                            </Card>
                            <br/>
                            <Link href={"/deputados"} className='btn btn-danger'> Voltar</Link>
                            </Col>
                            <Col md={6}>
                            <h3> Despesas </h3>
                            <Table striped>
                                    <thead>
                                        <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {despesas.map(d => (
                                      <tr>
                                        <td> {d.dataDocumento} </td>
                                        <td> {d.tipoDespesa} </td>
                                        <td> {d.valorLiquido} </td>
                                        </tr> 
                                    ))}                                                         
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={1}>
                            <h3> Profissões </h3>
                            <ul>
                            {profissoes.map(p => (
                                 <li> {p.titulo}  </li>  
                            ))}   
                             </ul>     
                            </Col>
                  
                </Row>
    </Container>
    </>
  )
}

export default id

export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultadoDeputados = await apiDeputados.get("/deputados/" + id)
  const deputado = resultadoDeputados.data.dados
  const resultadoDespesas = await apiDeputados.get("/deputados/" + id +  "/despesas")
  const despesas = resultadoDespesas.data.dados
  const resultadoProfissoes = await apiDeputados.get("/deputados/" + id +  "/profissoes")
  const profissoes = resultadoProfissoes.data.dados
  return {
      props: {
        deputado, despesas, profissoes
      }, 
  }
}