import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

const index = () => {
    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        setCursos(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('cursos')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('cursos', JSON.stringify(itens))
        setCursos(itens)
    }
    }
    return (
        <>
            <Cabecalho/>
            <Container> 
            <Link href="/cursos/formCursos" className='mb-2 btn btn-primary'> 
            <AiFillPlusCircle className='m-1' />
            Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                       
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                {cursos.map((c,index) =>(
		            <tr key={index}>
                        <td>
                            {c.nome}
                        </td>
                        <td>
                            {c.duracao}
                        </td>
                        <td>
                            {c.modalidade}
                        </td>
                        <td> 
                        <BsTrashFill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/cursos/' + index}>
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