import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'

const index = () => {
    const [professores, setProfessores] = useState([])

    useEffect(()=>{
        setProfessores(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('professores')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('professores', JSON.stringify(itens))
        setProfessores(itens)
    }
    }
    return (
        <>
            <Cabecalho/>
            <Container> 
            <Link href="/professores/formProfessores" className='mb-2 btn btn-primary'> 
            <AiFillPlusCircle className='m-1' />
            Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>                       
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>Salário</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Numero</th>
                        <th>Bairro</th>

                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                {professores.map((p,index) =>(
		            <tr key={index}>
                        <td>
                            {p.nome}
                        </td>
                        <td>
                            {p.cpf}
                        </td>
                        <td>
                            {p.matricula}
                        </td> 
                        <td>
                            {p.salario}
                        </td>
                        <td>
                            {p.email}
                        </td>
                        <td>
                            {p.telefone}
                        </td>
                        <td>
                            {p.cep}
                        </td>
                        <td>
                            {p.logradouro}
                        </td>
                        <td>
                            {p.complemento}
                        </td>
                        <td>
                            {p.numero}
                        </td>
                        <td>
                            {p.bairro}
                        </td>
                        <td>
                        <BsTrashFill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/professores/' + index}>
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