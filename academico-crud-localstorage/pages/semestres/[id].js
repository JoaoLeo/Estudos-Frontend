import Cabecalho from '@/components/Cabecalho'
import semestreValidator from '@/validators/semestreValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState : { errors } } = useForm();

  useEffect(()=>{
    if(query.id) { 
    const semestres = JSON.parse(window.localStorage.getItem('semestres'))
    const curso = semestres[query.id]
    for(let campo in curso) {
        setValue(campo, curso[campo])
    }
}
  },[query.id])

  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.splice(query.id, 1, dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push("/semestres")
  }

  return (
    <>
    <Cabecalho/>
    <Container> 
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome do semestre" {...register('nome', semestreValidator.nome)} />
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="dtInicio">
          <Form.Label>Data de início</Form.Label>
          <Form.Control type="date" isInvalid={errors.dtInicio}  {...register('dtInicio', semestreValidator.dtInicio)} />
          { errors.dtInicio && <p className='mt-1 text-danger'> {errors.dtInicio.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="dtFim">
          <Form.Label>Data de fim</Form.Label>
          <Form.Control type="date"  sInvalid={errors.dtFim} {...register('dtFim', semestreValidator.dtFim)}  />
          { errors.dtFim && <p className='mt-1 text-danger'> {errors.dtFim.message} </p> } 
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2'>
          <BsSendCheck className='me-2' onClick={handleSubmit(salvar)}/>
          Salvar
        </Button>
        <Link href={'/semestres'}>
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