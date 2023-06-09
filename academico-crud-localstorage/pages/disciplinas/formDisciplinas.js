import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const formDisciplinas = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm();

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
          <Form.Control type="text" placeholder="Digite o nome da disciplina" {...register('nome', { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="Digite o curso" {...register('curso', { required: true })} />
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