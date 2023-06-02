import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm();

  useEffect(()=>{
    if(query.id) { 
      axios.get(`/api/disciplinas/${query.id}`).then(res => {
        const disciplina = res.data
        for(let atributo in disciplina){
          setValue(atributo, disciplina[atributo])
        }
       })
    }
  },[query.id])

  function salvar(dados) {
    axios.put(`/api/disciplinas/${query.id}`, dados)
    push("/disciplinas")
  
  }

  return (
    <Pagina titulo="Disciplina">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome da disciplina" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="Digite o curso" {...register('curso')} />
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2'>
          <BsSendCheck className='me-2' onClick={handleSubmit(salvar)}/>
          Salvar
        </Button>
        <Link href={'/disciplinas'}>
        <Button variant="danger">
          <BsArrowBarLeft className='me-2'/> 
          Voltar
        </Button>
        </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default id