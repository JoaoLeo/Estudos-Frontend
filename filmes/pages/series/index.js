import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = (props) => {
    const series = props.series
    return (
        <>
            <Pagina titulo="Popular">

                <Row md={4}>
                    {series.map(serie => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + serie.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{serie.name}</Card.Title>
                                    <p>
                                        Nota: {serie.vote_average}
                                    </p>
                                    <p>
                                        {serie.overview}
                                    </p>
                                    <p>
                                        <Link className='btn btn-warning' href={"/series/" + serie.id}> Detalhes</Link>
                                    </p>
                                
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Pagina>

        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get("/tv/popular?language=pt-BR'")
    const series = resultado.data.results
    return {
        props: {
            series
        },
    }
}