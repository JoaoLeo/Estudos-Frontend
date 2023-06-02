import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

const index = () => {
    const [salas, setSalas] = useState([])

    useEffect(()=>{
        setSalas(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('salas')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('salas', JSON.stringify(itens))
        setSalas(itens)
    }
    }
    return (
        <>
            <Cabecalho titulo="Salas"/>
            <Container> 
            <Link href="/salas/formSalas" className='mb-2 btn btn-primary'> 
            <AiFillPlusCircle className='m-1' />
            Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                       
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                {salas.map((c,index) =>(
		            <tr key={index}>
                        <td>
                            {c.nome}
                        </td>
                        <td>
                            {c.capacidade}
                        </td>
                        <td>
                            {c.tipo}
                        </td>
                        <td> 
                        <BsTrashFill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/salas/' + index}>
                            <BsFillPencilFill /> 
                        </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Container>
        </>

    )
}

export default index