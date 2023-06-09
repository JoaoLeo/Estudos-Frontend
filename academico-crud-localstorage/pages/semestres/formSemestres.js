import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const formSemestres = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.unshift(dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push("/semestres")
  }

  return (
    <> 
    <Cabecalho />
    <Container> 
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do semestre" {...register('nome', { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Data de início</Form.Label>
          <Form.Control type="date" {...register('dtInicio', { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Data de fim</Form.Label>
          <Form.Control type="date" {...register('dtFim', { required: true })}  />
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2' onClick={handleSubmit(salvar)}>
          <BsSendCheck className='me-2'/>
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

export default formSemestres