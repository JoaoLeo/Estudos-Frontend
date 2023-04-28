import Imagens from '@/components/Imagens'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const DetalhesAtores = (props) => {
    const ator = props.infoAtor
    const filmes = props.filmes.cast
    const imagens = props.imagens.profiles
    const series = props.series.cast
  return (
    <>
    <Pagina>
    <Row>
        <Col md={3}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + ator.profile_path} />
        </Col>
        <Col md={9}>
            <p> <strong> Data de nascimento: </strong> {ator.birthday != null ? ator.birthday : "Não informado na api"}</p>
            <p> <strong> Local de nascimento: </strong> {ator.place_of_birth != null ? ator.place_of_birth : "Não informado na api" }</p>
            <p> <strong> Biografia: </strong> {ator.biography != "" ? ator.biography : "Não informado na api"}</p>
        </Col>
    </Row>
    
    <Imagens 
    titulo="Imagens" 
    lista={imagens} 
    propriedade="file_path" 
    size={1}/>

    <Imagens 
    titulo="Filmes" 
    lista={filmes} 
    propriedade="poster_path" 
    size={2}/>

    <Imagens 
     titulo="Séries" 
     lista={series}
     propriedade="poster_path" 
     size={2}/>
            
    </Pagina>
    </>
  )
}

export default DetalhesAtores

export async function getServerSideProps(context) {
    const id = context.params.id
    const resAtor = await apiFilmes.get("/person/" + id + '?language=pt-BR')
    const resFilmes = await apiFilmes.get("/person/"+ id + "/movie_credits")
    const resImagens = await apiFilmes.get("/person/"+ id+ "/images")
    const resSeries = await apiFilmes.get("/person/"+ id + "/tv_credits")
    const infoAtor = resAtor.data
    const filmes = resFilmes.data
    const imagens = resImagens.data
    const series = resSeries.data
    return {
        props: {
            infoAtor, filmes, imagens, series
        }, 
    }
}