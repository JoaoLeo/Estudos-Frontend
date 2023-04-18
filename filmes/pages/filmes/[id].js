import Pagina from '@/components/Pagina';
import apiFilmes from '@/services/apiFilmes';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Detalhes = (props) => {
    const {title,poster_path,release_date,vote_average,overview} = props.filme
    return (
        <>
            <Pagina titulo= {title}>
            <Row>
                        <Col>
                            <Card style={{ display: 'flex', width: '20rem', height: '20rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + poster_path} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <p>
                                        Lançamento: {release_date}
                                    </p>
                                    <p>
                                        Nota: {vote_average}
                                    </p>
                                    <p>
                                        {overview}
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
    const resultado = await apiFilmes.get("/movie/" + id)
    const filme = resultado.data
    return {
        props: {
            filme
        }, // will be passed to the page component as props
    }
}