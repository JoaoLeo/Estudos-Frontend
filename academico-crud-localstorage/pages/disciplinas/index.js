import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

const index = () => {
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(()=>{
        setDisciplinas(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('disciplinas')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('disciplinas', JSON.stringify(itens))
        setDisciplinas(itens)
    }
    }
    return (
        <>
            <Cabecalho/>
            <Container> 
            <Link href="/disciplinas/formDisciplinas" className='mb-2 btn btn-primary'> 
            <AiFillPlusCircle className='m-1' />
            Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                       
                        <th>Nome</th>
                        <th>Curso</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                {disciplinas.map((d,index) =>(
		            <tr key={index}>
                        <td>
                            {d.nome}
                        </td>
                        <td>
                            {d.curso}
                        </td>
                        <td> 
                        <BsTrashFill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/disciplinas/' + index}>
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