import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue , formState : { errors }} = useForm();

  useEffect(()=>{
    if(query.id) { 
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
    const disciplina = disciplinas[query.id]
    for(let campo in disciplina) {
        setValue(campo, disciplina[campo])
    }
}
  },[query.id])

  function salvar(dados) {
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.splice(query.id, 1, dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push("/disciplinas")
  }

  return (
    <>
    <Cabecalho/>
    <Container> 
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text"  isInvalid={errors.nome}  placeholder="Digite o nome da disciplina" {...register('nome', disciplinaValidator.nome)} />
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" isInvalid={errors.curso} placeholder="Digite o curso" {...register('curso', disciplinaValidator.curso )} />
          { errors.curso && <p className='mt-1 text-danger'> {errors.curso.message} </p> } 
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
      </Container>
    </>
  )
}

export default id