import Header from '@/components/Header'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const index = (props) => {
  const deputados = props.deputados;
  return (
    <>
    <Header/>
    <Container> 
    <h1> Deputados </h1>
    <Row>
                        
                        {deputados.map(d => (
                            <Col md={2}>
                            <Link href={"/deputados/" + d.id}>
                            <Card className='mt-4'> 
                            <Card.Img variant="top" src={d.urlFoto} title={d.nome} />
                            </Card>
                            </Link>
                            </Col>
                        ))}
                   
                </Row>
    </Container>
    </>
  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get("/deputados")
  const deputados = resultado.data.dados
  return {
      props: {
        deputados
      }, 
  }
}