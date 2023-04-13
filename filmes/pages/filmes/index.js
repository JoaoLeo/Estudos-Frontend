import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiDeputados from '../services/apiDeputados'

const index = () => {

    const [deputados, setDeputados] = useState([])
    useEffect(() => {
        apiDeputados.get('/deputados').then(res => {
            setDeputados(res.data.dados);
        })
    }, [])
    return (
        <>
            <Pagina titulo="Deputados">
                {deputados.map(deputado => (
                    <p>{deputado.nome}</p>
                ))}
            </Pagina>

        </>
    )
}

export default index