import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const Formulario = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.unshift(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push("/cursos")
  }

  return (
    <Pagina titulo="Curso">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do curso" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control type="text" placeholder="Digite a duração" {...register('duracao')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control type="text" placeholder="Digite a modalidade" {...register('modalidade')}  />
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2' onClick={handleSubmit(salvar)}>
          <BsSendCheck className='me-2'/>
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
    </Pagina>
  )
}

export default Formulario