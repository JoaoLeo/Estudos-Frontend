import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes' 

const index = (props) => {

    return (
        <>
            <Pagina titulo="Filmes">
                { props.filmes.map(filme => (
                    <p>{filme.title}</p>
                ))}
            </Pagina>

        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiFilmes.get("/movie/popular")
    const filmes = resultado.data.results
    return {
      props: {
        filmes
      }, // will be passed to the page component as props
    }
  }