import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

const Disciplinas = () => {
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(()=>{
        getAll()
    },[])

    function getAll(){
        axios.get("/api/disciplinas").then(res => {
            setDisciplinas(res.data)
           })
    }
    function excluir(id){ 
        if(confirm("Deseja realmente excluir o registro?")) { 
          axios.delete("api/disciplinas/" + id)
          getAll()
        }
      }
    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplinas/form" className='mb-2 btn btn-primary'> 
            <AiFillPlusCircle className='m-1' />
            Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                       
                        <th>Nome</th>
                        <th>Curso</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                {disciplinas.map(d =>(
		            <tr key={d.id}>
                        <td>
                            {d.nome}
                        </td>
                        <td>
                            {d.curso}
                        </td>
                        <td> 
                        <BsTrashFill onClick={() => excluir(d.id)} className="text-danger me-2"/> 
                        <Link href={'/disciplinas/' + d.id}>
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