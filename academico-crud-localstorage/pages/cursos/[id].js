import Cabecalho from '@/components/Cabecalho'
import cursoValidator from '@/validators/cursoValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue ,formState : { errors }} = useForm();

  useEffect(()=>{
    if(query.id) { 
    const cursos = JSON.parse(window.localStorage.getItem('cursos'))
    const curso = cursos[query.id]
    for(let campo in curso) {
        setValue(campo, curso[campo])
    }
}
  },[query.id])

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push("/cursos")
  }

  return (
    <>
    <Cabecalho/>
    <Container> 
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label> Nome </Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome do curso" {...register('nome',cursoValidator.nome )} />
         { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label> Duração </Form.Label>
          <Form.Control type="number" isInvalid={errors.duracao}  placeholder="Digite a duração" {...register('duracao', cursoValidator.duracao)} />
          { errors.duracao && <p className='mt-1 text-danger'> {errors.duracao.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control type="text" isInvalid={errors.duracao} placeholder="Digite a modalidade" {...register('modalidade',cursoValidator.modalidade )}  />
          { errors.modalidade && <p className='mt-1 text-danger'> {errors.modalidade.message} </p> } 
        </Form.Group>


        <div className='text-center'>
        <Button variant="success" className='me-2'>
          <BsSendCheck className='me-2' onClick={handleSubmit(salvar)}/>
          Salvar
        </Button>
        <Link href={'/cursos'}>
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