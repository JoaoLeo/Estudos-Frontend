import Imagens from '@/components/Imagens';
import Pagina from '@/components/Pagina';
import apiFilmes from '@/services/apiFilmes';
import Link from 'next/link';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Detalhes = (props) => {
    const filme = props.filme
    const atores = props.atores.cast
    return (
        <>
            <Pagina titulo={filme.title}>
                <Row>
                    <Col md={3}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + filme.poster_path} />
                    </Col>
                    <Col md={9}>
                        <Card>

                            <Card.Body>
                                <Card.Title>{filme.title}</Card.Title>
                                <p>
                                    <strong>
                                        Lançamento:
                                    </strong>  {filme.release_date}
                                </p>
                                <p>
                                    <strong> Nota:</strong>  {filme.vote_average}
                                </p>
                                <p>
                                    <strong>
                                        Orçamento:
                                    </strong> {filme.budget}
                                </p>
                                <p>
                                    <strong>
                                        Estados:
                                    </strong> {filme.status}
                                </p>
                                <p>
                                    <strong>
                                        Gênero:
                                    </strong>
                                    {filme.genres.map(g => (
                                        <span> {"| " + g.name + " |"}  </span>
                                    ))}
                                </p>
                                <hr></hr>
                                <p>
                                    {filme.overview}
                                </p>
                            </Card.Body> 
                        </Card>
                    </Col>
                  
                </Row>
                <Imagens 
                titulo="Atores" 
                lista={atores} 
                propriedade="profile_path" 
                size={2}
                link="/atores/" />
            </Pagina>
        </>
    )
}

export default Detalhes;


export async function getServerSideProps(context) {
    const id = context.params.id
    const resultado = await apiFilmes.get("/movie/" + id + "?language=pt-BR")
    const filme = resultado.data
    const getAtores = await apiFilmes.get("/movie/" + id + "/credits")
    const atores = getAtores.data
    return {
        props: {
            filme, atores
        }, 
    }
}