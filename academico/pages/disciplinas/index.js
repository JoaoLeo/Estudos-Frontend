import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

const Disciplinas = () => {
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(()=>{
       
    },[])

    return (
        <Pagina titulo="Cursos">

            <Link href="/cursos/form" className='mb-2 btn btn-primary'> 
            <AiFillPlusCircle className='m-1' />
            Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                       
                        <th>Nome</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                {disciplinas.map((c,index) =>(
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
                        <Link href={'/disciplinas/' + index}>
                            <BsFillPencilFill /> 
                        </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>

    )

    }
export default Disciplinas