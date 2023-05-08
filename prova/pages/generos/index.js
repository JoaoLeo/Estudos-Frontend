import Header from '@/components/Header'
import apiAnimes from '@/services/apiAnimes'
import React from 'react'
import { Container } from 'react-bootstrap'

const index = (props) => {
  const generos = props.generos
  return (
    <>
    <Header titulo="Generos"/> 
    <Container>
        <ul> 
    {generos.map(g => (
        <li> {g.name} ({g.count}) </li>
           ))}
           </ul>
    </Container>   
    </>
  )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnimes.get("/genres/anime")
    const generos = resultado.data.data
    return {
        props: {
        generos
        }, 
    }
  }