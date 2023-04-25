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
                    {props.filmes.map(filme => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + filme.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{filme.title}</Card.Title>
                                    <p>
                                        Lançamento: {filme.release_date}
                                    </p>
                                    <p>
                                        Nota: {filme.vote_average}
                                    </p>
                                    <p>
                                        {filme.overview}
                                    </p>
                                    <p>
                                        <Link className='btn btn-warning' href={"/filmes/" + filme.id}> Detalhes</Link>
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
    const resultado = await apiFilmes.get("/movie/top_rated?language=pt-BR'")
    const filmes = resultado.data.results
    return {
        props: {
            filmes
        }, // will be passed to the page component as props
    }
}