import Pagina from '@/components/Pagina'
import React from 'react'
import apiFilmes from '@/services/apiFilmes'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const topRated = (props) => {
    return (
        <>
            <Pagina titulo="Top Rated">

                <Row md={4}>
                    {props.serie.map(s => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + s.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{s.name}</Card.Title>
                                    <p>
                                        Lançamento: {s.release_date}
                                    </p>
                                    <p>
                                        Nota: {s.vote_average}
                                    </p>
                                    <p>
                                        {s.overview}
                                    </p>
                                    <p>
                                        <Link className='btn btn-warning' href={"/series/" + s.id}> Detalhes</Link>
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

export default topRated

export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get("/tv/top_rated?language=pt-BR'")
    const serie = resultado.data.results
    return {
        props: {
            serie
        }, 
    }
}