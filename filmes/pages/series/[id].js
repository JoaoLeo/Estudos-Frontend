import Pagina from '@/components/Pagina';
import apiFilmes from '@/services/apiFilmes';
import Link from 'next/link';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Detalhes = (props) => {
   const serie = props.serie
    return (
        <>
            <Pagina titulo={serie.name}>
                <Row>
                    <Col md={3}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + serie.backdrop_path} />
                    </Col>
                    <Col md={9}>
                        <Card>

                            <Card.Body>
                                <p>
                                    <strong> Nota:</strong>  {serie.vote_average}
                                </p>
                                <hr></hr>
                                <p>
                                    {serie.overview}
                                </p>
                            </Card.Body> 
                        </Card>
                    </Col>
                  
                </Row>


            </Pagina>
        </>
    )
}

export default Detalhes;


export async function getServerSideProps(context) {
    const id = context.params.id
    const resultado = await apiFilmes.get("/tv/" + id + "?language=pt-BR")
    const serie = resultado.data
    return {
        props: {
            serie
        }, 
    }
}