import Pagina from '@/components/Pagina'
import React from 'react'
import apiFilmes from '@/services/apiFilmes'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
const index = (props) => {
  const atores = props.atores
  return (
    <>
    <Pagina titulo="Atores">
    <h1> Atores </h1>
                    <Row>
                        
                            {atores.map(a => (
                                <Col md={2}>
                                <Link href={"/atores/" + a.id}>
                                <Card className='mt-4'> 
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + a.profile_path} title={a.name} />
                                <Card.Body> 
                                  <Card.Title>{a.name}</Card.Title>
                                  <p> </p>
                                  </Card.Body>
                                </Card>
                                </Link>
                                </Col>
                            ))}
                       
                    </Row>
    </Pagina>
    </>
  )
}

export default index


export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get("/person/popular?language=pt-BR'")
  const atores = resultado.data.results
  return {
      props: {
          atores
      }, 
  }
}