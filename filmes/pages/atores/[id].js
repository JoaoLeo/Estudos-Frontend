import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const DetalhesAtores = (props) => {
    const ator = props.infoAtor
    const filmes = props.filmes.cast
  return (
    <>
    <Pagina>
    <Row>
        <Col md={3}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + ator.profile_path} />
        </Col>
        <Col md={9}>
            <p> <strong >Data de nascimento: </strong> {ator.birthday != null ? ator.birthday : "Não informado na api"}</p>
            <p> <strong> Biografia: </strong> {ator.biography != "" ? ator.biography : "Não informado na api"}</p>
        </Col>
    </Row>
    <Row>
                        <h1> Filmes: </h1>
                        {filmes.map(f => (
                            <Col md={2}>
                            <Link href={"/filmes/" + f.id}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + f.poster_path} title={f.name} />
                            </Link>
                            </Col>
                        ))}
                   
                </Row>
    </Pagina>
    </>
  )
}

export default DetalhesAtores

export async function getServerSideProps(context) {
    const id = context.params.id
    const resAtor = await apiFilmes.get("/person/" + id)
    const resFilmes = await apiFilmes.get("/person/"+ id + "/tv_credits")
    const infoAtor = resAtor.data
    const filmes = resFilmes.data
    return {
        props: {
            infoAtor, filmes
        }, // will be passed to the page component as props
    }
}