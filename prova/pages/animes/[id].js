import Header from '@/components/Header';
import apiAnimes from '@/services/apiAnimes';
import Link from 'next/link';
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const id = (props) => {
    const detalhes = props.detalhes
  return (
    <>
    <Header titulo={detalhes.title}/>
    <Container>
        <Row>
        <Col md={3}>
        <Card border="danger">
        <Card.Header className='bg-danger text-light'>Foto</Card.Header>
        <Card.Img src={detalhes.images.webp.image_url} />
        <Card.Body>
        <Link href={detalhes.images.webp.image_url} target="_blank"> <Button className='bg-primary'> Ampliar </Button> </Link>
        </Card.Body>
        </Card>
        <br/>
        <Link href={"/animes/"}> <Button className='bg-success'>  Voltar </Button> </Link>
         </Col>
                    <Col md={9}>
                        <Card border="danger">
                        <Card.Header className='bg-danger text-light'> {detalhes.title}</Card.Header>
                            <Card.Body bg="light">                          
                                <p> <strong> Episódios: </strong> {detalhes.episodes} </p>
                                <p> <strong> Status: </strong> {detalhes.status} </p>
                                <p> <strong> Ano: </strong> {detalhes.year} </p>
                                <p> <strong> Duração: </strong> {detalhes.duration} </p>
                                <p> <strong> Score: </strong> {detalhes.score} </p>
                                <p> {detalhes.year != null ? detalhes.synopsis : ""} </p>
                            </Card.Body> 
                        </Card>
                    </Col>
            </Row>
        
    </Container>
    </>
  )
}

export default id

export async function getServerSideProps(context) {
    const id = context.params.id;
    const anime = await apiAnimes.get("/anime/" + id )
    const detalhes = anime.data.data
    return {
        props: {
          detalhes
        }, 
    }
  }