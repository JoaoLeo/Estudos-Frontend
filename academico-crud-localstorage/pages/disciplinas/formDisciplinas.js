import Cabecalho from '@/components/Cabecalho'
import disciplinaValidator from '@/validators/disciplinaValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const formDisciplinas = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors }} = useForm();

  function salvar(dados) {
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.unshift(dados)
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
        <Button variant="success" className='me-2' onClick={handleSubmit(salvar)}>
          <BsSendCheck className='me-2'/>
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

export default formDisciplinas