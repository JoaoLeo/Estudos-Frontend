import Cabecalho from '@/components/Cabecalho'
import salaValidator from '@/validators/salaValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'
import { mask } from 'remask'

const formSalas = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.unshift(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push("/salas")
  }
  function handleChange(event){
    setValue(event.target.name, (mask(event.target.value, event.target.getAttribute("mask"))))
  }

  return (
    <> 
    <Cabecalho />
    <Container> 
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome da sala" {...register('nome', salaValidator.nome )} />
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade</Form.Label>
          <Form.Control type="number" 
          isInvalid={errors.capacidade} 
          placeholder="Digite a capacidade" 
          {...register('capacidade', salaValidator.capacidade )} 
          mask="99"
          onChange={handleChange}/>
          { errors.capacidade && <p className='mt-1 text-danger'> {errors.capacidade.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Control type="text" isInvalid={errors.tipo} placeholder="Digite o tipo" {...register('tipo', salaValidator.tipo )}  />
          { errors.tipo && <p className='mt-1 text-danger'> {errors.tipo.message} </p> } 
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2' onClick={handleSubmit(salvar)}>
          <BsSendCheck className='me-2'/>
          Salvar
        </Button>
        <Link href={'/salas'}>
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

export default formSalas